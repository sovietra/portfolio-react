import { useState } from 'react'
import { Maximize2, RotateCw, Box } from 'lucide-react'

const ModelViewer = ({ translations }) => {
  const [selectedModel, setSelectedModel] = useState(0)

  const models = [
    {
      name: "Japanese Yakisoba Shop",
      description: translations.model1Desc || "My 3D Japanese food shop creation",
      embedUrl: "https://sketchfab.com/models/1e44faf1b7f440e799d54dbf8fbd2457/embed"
    },
    {
      name: "Japanese Style House",
      description: translations.model2Desc || "Traditional Japanese house design",
      embedUrl: "https://sketchfab.com/models/d4f35b0dfd104d9d8444a27ea5ca7e43/embed"
    }
  ]

  return (
    <section className="model-viewer-section" id="3d-models">
      <h2 className="heading">
        {translations.my3DModels || "My 3D"} <span>{translations.my3DModelsSpan || "Models"}</span>
      </h2>

      <div className="model-viewer-container">
        <div className="model-info">
          <Box size={40} className="model-icon" />
          <h3>{models[selectedModel].name}</h3>
          <p>{models[selectedModel].description}</p>
          <div className="model-controls-info">
            <div className="control-tip">
              <RotateCw size={18} />
              <span>{translations.clickDrag || "Click & Drag to rotate"}</span>
            </div>
            <div className="control-tip">
              <Maximize2 size={18} />
              <span>{translations.scrollZoom || "Scroll to zoom"}</span>
            </div>
          </div>
        </div>

        <div className="model-viewer-frame">
          <iframe
            src={models[selectedModel].embedUrl}
            frameBorder="0"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            className="model-iframe"
            title="3D Model"
          />
        </div>

        {models.length > 1 && (
          <div className="model-selector">
            {models.map((model, index) => (
              <button
                key={index}
                className={`model-thumb ${selectedModel === index ? 'active' : ''}`}
                onClick={() => setSelectedModel(index)}
              >
                <Box size={24} />
                <span>{model.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default ModelViewer