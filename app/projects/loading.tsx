export default function ProjectsLoading() {
  return (
    <div className="min-h-screen bg-primary">
      <div className="container-section py-16">
        <div className="mb-12 text-center">
          <div className="h-10 w-64 bg-gray-800 rounded-lg animate-pulse mx-auto mb-4"></div>
          <div className="h-5 w-96 max-w-full bg-gray-800 rounded-lg animate-pulse mx-auto"></div>
        </div>
        
        {/* Search loading */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="h-12 bg-gray-800 rounded-lg animate-pulse flex-1"></div>
            <div className="flex gap-2">
              <div className="h-12 w-32 bg-gray-800 rounded-lg animate-pulse"></div>
              <div className="h-12 w-32 bg-gray-800 rounded-lg animate-pulse"></div>
            </div>
          </div>
          <div className="h-4 w-48 bg-gray-800 rounded-lg animate-pulse"></div>
        </div>
        
        {/* Projects grid loading */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="rounded-xl overflow-hidden bg-gray-900 animate-pulse">
              <div className="p-6 h-64 flex flex-col">
                <div className="h-6 w-3/4 bg-gray-800 rounded-lg mb-4"></div>
                <div className="h-4 w-full bg-gray-800 rounded-lg mb-2"></div>
                <div className="h-4 w-5/6 bg-gray-800 rounded-lg mb-4"></div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="h-6 w-16 bg-gray-800 rounded-full"></div>
                  ))}
                </div>
                
                <div className="mt-auto flex gap-3">
                  <div className="h-5 w-20 bg-gray-800 rounded-lg"></div>
                  <div className="h-5 w-20 bg-gray-800 rounded-lg ml-auto"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 