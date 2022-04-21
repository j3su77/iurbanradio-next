


interface props {
    id: number,
    title: string,
    link: string
}

 const itemNavbar: props[] = 
     [
        {
            id: 1,
            title: "Inicio",
            link: "/"
        },
        {
            id: 2,
            title: "Publicaciones",
            link: "#publicaciones"
        },
        {
            id: 3,
            title: "Contactanos",
            link: "#contactanos"
        },
        {
            id: 4,
            title: "Ingresar",
            link: "/auth/login"
        }
    ]

export default  itemNavbar;