"use client";

import { useState } from "react";
import NextImage from "next/image";
import {
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { imagesGallery } from "@/libs/data";

type Props = {};

const Gallery = (props: Props) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [imageUrl, setImageUrl] = useState<string>("");

  const handleOpen = (imageUrl: string) => {
    setImageUrl(imageUrl);
    onOpen();
  };

  return (
    <section className="py-12 space-y-4">
      <h3 className="text-3xl font-bold text-orange-600">
        Gallery of creations
      </h3>
      <div className="md:grid grid-cols-4 w-full gap-4">
        {imagesGallery.map((image, index) => (
          <NextImage
            key={index}
            src={image.url}
            alt={image.alt}
            width={640}
            height={640}
            className="rounded-lg mb-4 md:mb-0 cursor-pointer"
            onClick={() => handleOpen(image.url)}
          />
        ))}
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <NextImage
                src={imageUrl}
                alt="Modal Imagen"
                width={640}
                height={640}
                className="w-full h-full"
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Gallery;
