import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

// Gerando a lista de clientes dinamicamente, mantendo apenas o necessário.
const galleryItems = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: `Cliente ${i + 1}`,
  image: `/clients/cliente${i + 1}.png`,
}));

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Nossas parcerias de sucesso são construídas com a excelência do
            trabalho que realizamos a cada projeto.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              // O contêiner principal agora tem a sombra e o efeito de hover
              className="group cursor-pointer rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedImage(item)}
            >
              {/* Contêiner da imagem com a borda que some no hover */}
              <div className="border-2 border-gray-200 rounded-md p-2 transition-colors duration-300 group-hover:border-transparent">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="aspect-video">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Opcional: Se quiser manter o título no modal */}
                {/* <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {selectedImage.title}
                  </h3>
                </div> */}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
