import { useState, useEffect, useCallback } from 'react';
import { events } from '../../data/eventos';
import {
  GalleryContainer,
  Title,
  PhotoGrid,
  EventGrid,
  PhotoCard,
  PhotoImage,
  PhotoDescription,
  Modal,
  ModalImage,
  EventDescription,
  EventContainer,
  ModalEventTitle,
  ModalDescription,
  EventNameContainer,
  EventDate,
} from './style';
import {
  ModalCloseButton,
  ArrowButton,
  PaginationContainer,
  PaginationButton,
} from '../Button';

const EVENTS_PER_PAGE = 2;

function Galery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<{
    eventIndex: number;
    imgIndex: number;
  } | null>(null);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(events.length / EVENTS_PER_PAGE);

  const handleImageClick = (eventIndex: number, imgIndex: number) => {
    setSelectedImageIndex({ eventIndex, imgIndex });
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handleNextImage = useCallback(() => {
    if (selectedImageIndex) {
      const { eventIndex, imgIndex } = selectedImageIndex;
      const nextImgIndex = (imgIndex + 1) % events[eventIndex].imgSrc.length;
      setSelectedImageIndex({ eventIndex, imgIndex: nextImgIndex });
    }
  }, [selectedImageIndex]);

  const handlePrevImage = useCallback(() => {
    if (selectedImageIndex) {
      const { eventIndex, imgIndex } = selectedImageIndex;
      const prevImgIndex =
        (imgIndex - 1 + events[eventIndex].imgSrc.length) %
        events[eventIndex].imgSrc.length;
      setSelectedImageIndex({ eventIndex, imgIndex: prevImgIndex });
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        handleNextImage();
      } else if (event.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (event.key === 'Escape') {
        handleCloseModal();
      }
    };

    if (selectedImageIndex) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, handleNextImage, handlePrevImage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIndex = currentPage * EVENTS_PER_PAGE;
  const paginatedEvents = events.slice(
    startIndex,
    startIndex + EVENTS_PER_PAGE
  );

  return (
    <GalleryContainer>
      <Title>Galeria de Eventos</Title>
      <PhotoGrid>
        {paginatedEvents.map((event, eventIndex) => (
          <EventContainer key={eventIndex + startIndex}>
            <EventNameContainer>
              <EventDescription>{event.description}</EventDescription>
              <EventDate>{event.date}</EventDate>
            </EventNameContainer>

            <EventGrid>
              {event.imgSrc.map((image, imgIndex) => (
                <PhotoCard key={imgIndex}>
                  <PhotoImage
                    src={image.url}
                    alt={`Foto ${imgIndex + 1} do evento ${
                      eventIndex + startIndex + 1
                    }`}
                    onClick={() =>
                      handleImageClick(eventIndex + startIndex, imgIndex)
                    }
                  />
                  <PhotoDescription>{image.description}</PhotoDescription>
                </PhotoCard>
              ))}
            </EventGrid>
          </EventContainer>
        ))}
      </PhotoGrid>

      {selectedImageIndex && (
        <Modal onClick={handleCloseModal}>
          <ModalEventTitle>
            {events[selectedImageIndex.eventIndex].description}
          </ModalEventTitle>
          <ModalImage
            src={
              events[selectedImageIndex.eventIndex].imgSrc[
                selectedImageIndex.imgIndex
              ].url
            }
            alt="Imagem expandida"
          />
          <ModalDescription>
            {
              events[selectedImageIndex.eventIndex].imgSrc[
                selectedImageIndex.imgIndex
              ].description
            }
          </ModalDescription>
          <ArrowButton
            onClick={(e) => {
              e.stopPropagation();
              handlePrevImage();
            }}
            style={{ left: '20px' }}
          >
            <img
              src="https://res.cloudinary.com/dtglidvcw/image/upload/v1729464679/BUGBUSTER/esquerda.png"
              alt="Seta Esquerda"
            />
          </ArrowButton>
          <ArrowButton
            onClick={(e) => {
              e.stopPropagation();
              handleNextImage();
            }}
            style={{ right: '20px' }}
          >
            <img
              src="https://res.cloudinary.com/dtglidvcw/image/upload/v1729464682/BUGBUSTER/direita.png"
              alt="Seta Direita"
            />
          </ArrowButton>
          <ModalCloseButton
            onClick={(e) => {
              e.stopPropagation();
              handleCloseModal();
            }}
          >
            Fechar
          </ModalCloseButton>
        </Modal>
      )}

      <PaginationContainer>
        <PaginationButton onClick={handlePrevPage}>Anterior</PaginationButton>
        <PaginationButton onClick={handleNextPage}>Próximo</PaginationButton>
      </PaginationContainer>
    </GalleryContainer>
  );
}

export default Galery;
