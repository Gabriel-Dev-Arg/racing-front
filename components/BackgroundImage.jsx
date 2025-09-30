import React from 'react';

function BackgroundImage() {
  return (
    <div className="h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/maravilla-martinezjpg2-removebg-preview.png')" }}>
      {/* Contenido opcional encima de la imagen */}
    </div>
  );
}

export default BackgroundImage;