interface SeedPost {
  title: string;
  description: string;
  images: string[];
  tags: string[];
  slug: string;
}

interface SeedData {
  posts: SeedPost[];
}

export const initialData: SeedData = {
  posts: [
    {
      title: "Primera publicacion de pagina",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas  las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
      images: ["46566.jpg", "46567.jpg"],
      slug: "primera_publicacion",
      tags: ["musica", "actualidad"],
    },
    {
      title: "Segunda publicacion de la pagina",
      description:
        "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años.",
      images: ["46567.jpg", "46584.jpg"],
      slug: "segunda_publicacion",
      tags: ["tecnologia", "actualidad"],
    },
    {
        title: "Tercera publicacion de la pagina",
        description:
          "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años.",
        images: ["46584.jpg", "46566.jpg"],
        slug: "tercera_publicacion",
        tags: ["actualidad"],
      },
  ],
};
