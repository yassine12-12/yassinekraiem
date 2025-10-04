import { useState, useRef, useCallback } from 'react';
import { useMediaQuery } from 'react-responsive';
import Globe from 'react-globe.gl';

const InteractiveGlobe = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const globeEl = useRef();
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Locations where you've studied/worked
  const locations = [
    {
      id: 1,
      name: 'Berlin, Germany',
      description: 'Current location - TU Berlin Master\'s, Innomotics work',
      lat: 52.52,
      lng: 13.405,
      color: '#00D4FF',
      size: 0.8,
      type: 'current'
    },
    {
      id: 2,
      name: 'Tunisia',
      description: 'Home country - Elite High School graduate',
      lat: 33.886,
      lng: 9.537,
      color: '#FF6B6B',
      size: 0.6,
      type: 'origin'
    },
    {
      id: 3,
      name: 'Global Remote',
      description: 'Open to worldwide opportunities',
      lat: 0,
      lng: 0,
      color: '#4ECDC4',
      size: 0.4,
      type: 'opportunity'
    }
  ];

  const handleLocationClick = useCallback((location) => {
    setSelectedLocation(location);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: location.lat, lng: location.lng, altitude: 1.5 }, 1000);
    }
  }, []);

  const resetView = () => {
    setSelectedLocation(null);
    if (globeEl.current) {
      globeEl.current.pointOfView({ lat: 30, lng: 0, altitude: 2.5 }, 1000);
    }
  };

  return (
    <section className="c-space my-20" id="globe">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neon_gradient mb-4">Global Presence & Opportunities</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my journey from Tunisia to Berlin and my openness to global opportunities
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-center">
        {/* Interactive Globe */}
        <div className="card-glow p-4 rounded-xl bg-gradient-to-br from-black-200/30 to-blue-900/20 border border-blue-500/30 backdrop-blur-md relative overflow-hidden">
          <div className="h-96 w-full">
            <Globe
              ref={globeEl}
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              pointsData={locations}
              pointLat="lat"
              pointLng="lng"
              pointColor="color"
              pointRadius="size"
              pointAltitude={0.1}
              pointResolution={6}
              onPointClick={handleLocationClick}
              atmosphereColor="#4FC3F7"
              atmosphereAltitude={0.25}
              enablePointerInteraction={true}
              width={isMobile ? 300 : 500}
              height={384}
            />
          </div>
          
          {/* Reset View Button */}
          <button
            onClick={resetView}
            className="absolute top-6 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transform hover:scale-105 transition-all duration-300"
          >
            🌍 Reset View
          </button>
        </div>

        {/* Location Information Panel */}
        <div className="space-y-6">
          {/* Location Cards */}
          {locations.map((location) => (
            <div
              key={location.id}
              onClick={() => handleLocationClick(location)}
              className={`card-glow p-6 rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                selectedLocation?.id === location.id
                  ? 'border-2 border-cyan-400 shadow-2xl shadow-cyan-400/50'
                  : 'border border-gray-500/30 hover:border-cyan-400/50'
              } ${
                location.type === 'current'
                  ? 'bg-gradient-to-br from-cyan-900/30 to-blue-900/20'
                  : location.type === 'origin'
                  ? 'bg-gradient-to-br from-red-900/30 to-pink-900/20'
                  : 'bg-gradient-to-br from-green-900/30 to-teal-900/20'
              }`}
            >
              <div className="flex items-center mb-3">
                <div
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: location.color }}
                ></div>
                <h3 className="text-xl font-bold text-white">{location.name}</h3>
                {location.type === 'current' && (
                  <span className="ml-2 px-2 py-1 bg-cyan-500 text-black text-xs rounded-full font-semibold">
                    Current
                  </span>
                )}
              </div>
              <p className="text-gray-300">{location.description}</p>
              
              {selectedLocation?.id === location.id && (
                <div className="mt-4 p-4 bg-black/30 rounded-lg border border-cyan-400/30">
                  <h4 className="text-cyan-400 font-semibold mb-2">Location Details:</h4>
                  <div className="text-sm text-gray-300">
                    <p>Coordinates: {location.lat}°, {location.lng}°</p>
                    {location.type === 'current' && (
                      <div className="mt-2">
                        <p>🎓 Currently pursuing M.Sc. in Computational Engineering Science</p>
                        <p>💼 Working at Innomotics (Siemens) as AI/Data Science Engineer</p>
                        <p>🏢 Available for local networking and collaboration</p>
                      </div>
                    )}
                    {location.type === 'origin' && (
                      <div className="mt-2">
                        <p>🏠 Birthplace and cultural roots</p>
                        <p>📚 Completed high school education</p>
                        <p>🌍 Multilingual advantage (Arabic, French)</p>
                      </div>
                    )}
                    {location.type === 'opportunity' && (
                      <div className="mt-2">
                        <p>✈️ Open to international opportunities</p>
                        <p>🤝 Ready for remote collaboration</p>
                        <p>📈 Seeking impactful AI/ML projects worldwide</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Call to Action */}
          <div className="card-glow p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 text-center">
            <h3 className="text-xl font-bold text-neon_gradient mb-3">Ready to Collaborate?</h3>
            <p className="text-gray-300 mb-4">
              Whether you're in Berlin, planning to relocate, or looking for remote expertise in AI/Data Science
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              🚀 Let's Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveGlobe;