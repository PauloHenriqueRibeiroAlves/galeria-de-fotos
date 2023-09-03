"use client"

import { Modal } from "./components/Modal";
import { PhotoItem } from "./components/PhotoItem";
import { photoList } from "./data/photoList";
import { useState } from "react";

const page = () => {
  const [showModal, setShowModal] = useState (false);
  const [imagemOfModal, setImagemOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find(item => item.id === id);
    if(photo) {
      setImagemOfModal(photo.url);
      setShowModal(true);
    }
  }
  const closeModal = () => {
    setShowModal (false);
  }

  return (
    <div className="mx-2">
      <h1 className="text-center text-3xl font-bold my-10">Fotos intergaláticas</h1>

      <section className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 mg:grid-cols-3 gap-8">
        {photoList.map(item => (
          <PhotoItem
          key={item.id}
          photo={item}
          onClick={() => openModal(item.id)}
          />
        ))}
      </section>
      {showModal &&
        <Modal image={imagemOfModal} closeModal={closeModal} />
      }
    </div>
  )
}
export default page;

function useStates(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
