import { useState } from 'react'
import '../styles/SportsGallery.css'

interface Sport {
  id: number
  name: string
  image: string
  description: string
  emoji: string
}

const sports: Sport[] = [
  {
    id: 1,
    name: 'Football',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop',
    description: 'Le sport le plus populaire au monde',
    emoji: '⚽'
  },
  {
    id: 2,
    name: 'Basketball',
    image: 'https://images.unsplash.com/photo-1546519638-68991109d7d6?w=400&h=300&fit=crop',
    description: 'Action rapide et dynamique',
    emoji: '🏀'
  },
  {
    id: 3,
    name: 'Tennis',
    image: 'https://images.unsplash.com/photo-1554224311-beee415c15b7?w=400&h=300&fit=crop',
    description: 'Élégance et précision',
    emoji: '🎾'
  },
  {
    id: 4,
    name: 'Natation',
    image: 'https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?w=400&h=300&fit=crop',
    description: 'Endurance et fluidité',
    emoji: '🏊'
  },
  {
    id: 5,
    name: 'Cyclisme',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
    description: 'Vitesse et aventure',
    emoji: '🚴'
  },
  {
    id: 6,
    name: 'Boxe',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop',
    description: 'Force et technique',
    emoji: '🥊'
  },
  {
    id: 7,
    name: 'Volleyball',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=300&fit=crop',
    description: 'Travail en équipe et coordination',
    emoji: '🏐'
  },
  {
    id: 8,
    name: 'Ski',
    image: 'https://images.unsplash.com/photo-1551632786-4ac92b2c1b3a?w=400&h=300&fit=crop',
    description: 'Thrills en montagne',
    emoji: '⛷️'
  }
]

export default function SportsGallery() {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null)

  return (
    <section id="sports-gallery">
      <div className="sports-container">
        <h2>Galerie des Sports</h2>
        <p className="sports-subtitle">Découvrez une variété de sports passionnants</p>
        
        <div className="sports-grid">
          {sports.map((sport) => (
            <div
              key={sport.id}
              className="sport-card"
              onClick={() => setSelectedSport(sport)}
            >
              <div className="sport-image-wrapper">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="sport-image"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x300?text=${sport.name}`
                  }}
                />
                <div className="sport-overlay">
                  <span className="sport-emoji">{sport.emoji}</span>
                </div>
              </div>
              <div className="sport-info">
                <h3>{sport.name}</h3>
                <p>{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedSport && (
        <div className="modal-overlay" onClick={() => setSelectedSport(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-button"
              onClick={() => setSelectedSport(null)}
            >
              ✕
            </button>
            <img
              src={selectedSport.image}
              alt={selectedSport.name}
              className="modal-image"
            />
            <div className="modal-info">
              <h2>{selectedSport.emoji} {selectedSport.name}</h2>
              <p>{selectedSport.description}</p>
              <p className="modal-extra">
                Explorez davantage ce sport passionnant et découvrez ses techniques, ses champions et ses règles.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
