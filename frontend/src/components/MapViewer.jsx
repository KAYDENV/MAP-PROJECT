import React, { useEffect, useRef, useState } from 'react';
import { Viewer, Entity, EntityDescription } from 'resium';
import { Cartesian3, createWorldTerrainAsync, Ion, Terrain } from 'cesium';

// NOTE: For full terrain features, a Cesium Ion token is recommended.
Ion.defaultAccessToken = import.meta.env.VITE_CESIUM_TOKEN || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4MDQwZmMzNC04NzM0LTRmNjgtYTcyNC1kYWY5YjUxZmUzMmEiLCJpZCI6MzY4MTE3LCJpYXQiOjE3NjUzMDIxODd9.p3XpcnwJ2CTqqcCx6gV7lwMa-UmJIzCOmbIDi-G95Bs';

const MapViewer = ({ selectedLocation }) => {
    const viewerRef = useRef(null);
    const [terrainProvider, setTerrainProvider] = useState(null);

    useEffect(() => {
        createWorldTerrainAsync().then((provider) => {
            setTerrainProvider(provider);
        });
    }, []);

    useEffect(() => {
        if (selectedLocation && viewerRef.current && viewerRef.current.cesiumElement) {
            const viewer = viewerRef.current.cesiumElement;

            viewer.camera.flyTo({
                destination: Cartesian3.fromDegrees(
                    selectedLocation.lng,
                    selectedLocation.lat,
                    selectedLocation.height
                ),
                duration: 3, // 3 seconds flight duration
                orientation: {
                    heading: 0.0,
                    pitch: -0.785398, // Look down at 45 degrees
                    roll: 0.0
                }
            });
        }
    }, [selectedLocation]);

    return (
        <Viewer
            full
            ref={viewerRef}
            terrainProvider={terrainProvider}
        >
            {selectedLocation && (
                <Entity
                    name={selectedLocation.name}
                    position={Cartesian3.fromDegrees(selectedLocation.lng, selectedLocation.lat)}
                    point={{ pixelSize: 10, color: undefined }}
                >
                    <EntityDescription>
                        <h1>{selectedLocation.name}</h1>
                        <p>Exploring {selectedLocation.name}</p>
                    </EntityDescription>
                </Entity>
            )}
        </Viewer>
    );
};

export default MapViewer;
