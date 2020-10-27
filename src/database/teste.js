const Database = require('./db');

Database.then( async db => {

    // await db.run(`
    
    //     INSERT INTO orphanages (
    //         lat,
    //         lng,
    //         name,
    //         about,
    //         whatsapp,
    //         images,
    //         instructions,
    //         opening_hours,
    //         open_on_weekends
    //     )   VALUES (
    //         "-22.9134531",
    //         "-43.5660654",
    //         "Casa de Amor",
    //         "Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco ou vulnabilidade social.",
    //         "21968407770",
    //         "https://images.unsplash.com/photo-1594925782033-0238ef32fca0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    //         "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //         "Horário de visitas Das 18h até 08h",
    //         "0"
    //     );
    // `)
    
    const selectedOrphanages = await db.all("SELECT * FROM orphanages WHERE id = '2' ")

    console.log(selectedOrphanages)
})