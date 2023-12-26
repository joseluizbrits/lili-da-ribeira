import Potato from "../icons/Potato";
import Egg from "@/app/icons/Egg";
import Vegetable from "@/app/icons/Vegetable";
import Heart from "@/app/icons/Heart";
import Arrow from "../icons/Arrow";

export const ingredients = [
  {
    id: "potato",
    name: "Batata de Qualidade",
    desc: "Selecionada com cuidado para garantir a textura perfeita",
    icon: <Potato />,
    arrow: <Arrow color="#9219E2" />,
  },
  {
    id: "egg",
    name: "Ovos Frescos",
    desc: "Dão maciez, consistência e um sabor único à massa",
    icon: <Egg />,
    arrow: <Arrow color="#DD1717" />,
  },
  {
    id: "seasoning",
    name: "Toque Secreto Especial",
    desc: "Uma mistura exclusiva para um aroma irresistível",
    icon: <Vegetable />,
    arrow: <Arrow color="#4C9696" />,
  },
  {
    id: "love",
    name: "Amor Familiar",
    desc: "Um carinho diferenciado, passado de geração em geração",
    icon: <Heart />,
    arrow: <Arrow color="#6900AE" />,
  },
];
