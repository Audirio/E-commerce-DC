import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

// import images from "./img/docs.jpg"

export default function BasicButtons() {
    return (
        // <Stack spacing={2} direction="row">
        <div>
            <div>
                <Button
                    variant="contained">
                    <img src={"./image/camisetas.jpg"} width={"20px"} />
                </Button>
                <Button
                    variant="contained">
                    <img src={"./image/camisetas.jpg"} width={"20px"} />
                </Button>
                <Button
                    variant="contained">
                    <img src={"./image/camisetas.jpg"} width={"20px"} />
                </Button>
                <Button
                    variant="contained">
                    <img src={"./image/camisetas.jpg"} width={"20px"} />
                </Button>
                <Button
                    variant="contained">
                    <img src={"./image/camisetas.jpg"} width={"20px"} />
                </Button>
            </div>
        </div>
        // </Stack




   );
 }


// export default function Emphasis() {
//     const Icons = [
//         {
//             text: "Camisetas",
//             icon: "/images/camisetas.sgv",
//         },
//         {
//             text: "Calça",
//             icon: "/images/calcas.svg",
//         },
//         {
//             text: "Bonés",
//             icon: "/images/bones.svg"
//         },
//         {
//             text: "Headphones",
//             icon: "/images/fone.svg"
//         },
//         {
//             text: "Tênis",
//             icon: "/images/tenis.svg"
//         },

//     ];

//     return (
//         <section>
//             <h3>Coleções em destaque</h3>
//             <article>
//                 <div>
//                 {Icons.map((Icons) => ())}
//                         <div>
//                             <div>
//                                 <img src={Icons.icon} width={64} className="icon-focus"/>
//                             </div>
//                             <span className="span-icons">{Icons.text}</span>
//                         </div>
//                 </div>
//             </article>
//         </section>
//     )
// }
