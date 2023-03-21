export default async function handler(request, res) {

    const roster = [
        {
            "name": "Mickey Mouse",
            "description": "This is the man himself; Mickey the Mouse",
            "image" :"https://di2ponv0v5otw.cloudfront.net/posts/2022/05/04/6272d95efdd4cd63f1180f24/m_wp_6272dadf4fd23afc4104b553.webp",
            "voice": "Chris Diamantopoulos"
        },
        {
            "name": "Minnie Mouse",
            "description": "The wifey of Mickey Mouse",
            "image": "https://i.ebayimg.com/images/g/uNwAAOSwXyZjUtSc/s-l500.jpg",
            "voice":"Russi Taylor"
        },
        {
            "name": "Donald Duck",
            "description": "The best friend of Mickey Mouse",
            "image": "https://i.ebayimg.com/images/g/Il8AAOSwm9hgkB2p/s-l500.jpg",
            "voice": "Tony Anselmo"
        },
        {
            "name": "Goofy",
            "description":"The best friend of Mickey Mouse",
            "image": "https://i.ebayimg.com/images/g/~RQAAOSwrzdiaZjE/s-l500.jpg",
            "voice": "Bill Farmer"
        },
        {
            "name": "Pluto",
            "description": "The best friend of Mickey Mouse",
            "image": "https://i.ebayimg.com/images/g/3~YAAOSw-45eMXua/s-l500.jpg",
            "voice": "Bill Farmer"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
}