import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Search, Plus, Minus, Maximize2 } from 'lucide-react';
import { getProperties, type Property } from '../lib/supabase';
import { getPropertySlugMapping } from '../utils/slug';

// Custom marker icon with proper styling
const createCustomIcon = () => {
  return L.divIcon({
    html: `<div class="custom-marker">
             <div class="marker-dot"></div>
           </div>`,
    className: '',
    iconSize: [54, 54],
    iconAnchor: [27, 54],
    popupAnchor: [0, -50],
  });
};

const InteractiveMap: React.FC = () => {
  const [map, setMap] = useState<L.Map | null>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [properties, setProperties] = useState<Property[]>([]);
  const navigate = useNavigate();

  // Load properties from Supabase
  React.useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data?.filter(p => p.latitude && p.longitude) || []);
      } catch (error) {
        console.error('Error loading properties for map:', error);
      }
    };

    loadProperties();
  }, []);

  const customIcon = createCustomIcon();

  const handleZoomIn = () => {
    if (map) {
      map.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (map) {
      map.zoomOut();
    }
  };

  const handleFullscreen = () => {
    if (map) {
      const mapContainer = map.getContainer();
      if (mapContainer.requestFullscreen) {
        mapContainer.requestFullscreen();
      }
    }
  };

  const showAllProjects = () => {
    if (map && properties.length > 0) {
      const group = new L.featureGroup(
        properties.map(project => 
          L.marker([project.latitude, project.longitude])
        )
      );
      map.fitBounds(group.getBounds().pad(0.1));
    }
  };

  const filteredProjects = properties.filter(project =>
    project.title.includes(searchQuery)
  );

  const handlePropertyClick = (property: Property) => {
    const slug = getPropertySlugMapping(property.title);
    navigate(`/property/${slug}`);
  };

  return (
    <section className="py-0 bg-[#f7f7f7] overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="relative h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
          {/* All Projects Button */}
          <button
            onClick={showAllProjects}
            className="all-projects-btn map-control absolute top-3 md:top-5 left-3 md:left-5 px-3 md:px-4 py-2 rounded-lg font-bold bg-blue-600 text-white shadow-lg z-[401] text-xs md:text-sm"
          >
            جميع المشاريع
          </button>

          {/* Map Controls */}
          <div className="absolute top-3 md:top-5 right-3 md:right-5 flex flex-col gap-2 md:gap-3 z-[401]">
            {/* Search Control */}
            <div className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden">
              <button
                onClick={() => setSearchExpanded(!searchExpanded)}
                className="w-8 md:w-9 h-8 md:h-9 flex items-center justify-center bg-none border-none cursor-pointer"
              >
                <Search size={16} className="text-gray-600 md:w-[18px] md:h-[18px]" />
              </button>
              {searchExpanded && (
                <input
                  type="text"
                  placeholder="البحث عن المشاريع"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-32 md:w-48 border-none p-2 font-sans text-right text-sm md:text-base"
                  dir="rtl"
                />
              )}
            </div>
            
            {/* Zoom Controls */}
            <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
              <button onClick={handleZoomIn} className="w-8 md:w-9 h-8 md:h-9 flex items-center justify-center">
                <Plus size={14} className="text-gray-600 md:w-4 md:h-4" />
              </button>
              <div className="border-b border-gray-200"></div>
              <button onClick={handleZoomOut} className="w-8 md:w-9 h-8 md:h-9 flex items-center justify-center">
                <Minus size={14} className="text-gray-600 md:w-4 md:h-4" />
              </button>
            </div>
            
            {/* Fullscreen Control */}
            <button 
              onClick={handleFullscreen}
              className="w-8 md:w-9 h-8 md:h-9 bg-white shadow-lg rounded-lg cursor-pointer flex items-center justify-center border-none"
            >
              <Maximize2 size={16} className="text-gray-600 md:w-[18px] md:h-[18px]" />
            </button>
          </div>

          {/* Map */}
          <MapContainer
            center={[24.7136, 46.6753]}
            zoom={window.innerWidth < 768 ? 10 : 11}
            className="h-full w-full leaflet-container"
            ref={setMap}
            zoomControl={false}
            attributionControl={false}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {filteredProjects.map((project, index) => (
              <Marker
                key={index}
                position={[project.latitude!, project.longitude!]}
                icon={customIcon}
              >
                <Popup>
                  <div className="text-center" dir="rtl"> 
                    <h3 className="font-bold text-[#80572b] text-xs md:text-sm">
                      <button onClick={() => handlePropertyClick(project)} className="hover:underline">
                        {project.title}
                      </button>
                    </h3>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;