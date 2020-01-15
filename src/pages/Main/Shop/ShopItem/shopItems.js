import bot from '../../../../assets/images/bot.svg'
import botArm from '../../../../assets/images/botArm.svg'
import factory from '../../../../assets/images/factory.svg'
import ia from '../../../../assets/images/ia.svg'
import alien from '../../../../assets/images/alien.svg'
import planet from '../../../../assets/images/planet.svg'
import space from '../../../../assets/images/space.svg'
import galaxy from '../../../../assets/images/galaxy.svg'

function getShopItems(props) {
  return [
    {
      title: "Bot Army",
      description: "Buy this bot army to +1 click per second",
      quantity: props.shop.botArm.quantity,
      value: props.shop.botArm.value,
      image: botArm,
      click: "botArm",
    },
    {
      title: "Bot",
      description: "Buy this bot to +10 clicks per second",
      quantity: props.shop.bot.quantity,
      value: props.shop.bot.value,
      image: bot,
      click: "bot",
    },
    {
      title: "Factory",
      description: "Buy this factory to +100 clicks per second",
      quantity: props.shop.factory.quantity,
      value: props.shop.factory.value,
      image: factory,
      click: "factory",
    },
    {
      title: "Artificial Intelligence",
      description: "Buy this IA to +1000 clicks per second",
      quantity: props.shop.ia.quantity,
      value: props.shop.ia.value,
      image: ia,
      click: "ia",
    },
    {
      title: "Alien",
      description: "Buy this alien to +10.000 click per second",
      quantity: props.shop.alien.quantity,
      value: props.shop.alien.value,
      image: alien,
      click: "alien",
    },
    {
      title: "Planet",
      description: "Buy this planet to +100.000 click per second",
      quantity: props.shop.planet.quantity,
      value: props.shop.planet.value,
      image: planet,
      click: "planet",
    },
    {
      title: "Space",
      description: "Buy this space to +1.000.000 click per second",
      quantity: props.shop.space.quantity,
      value: props.shop.space.value,
      image: space,
      click: "space",
    },
    {
      title: "Galaxy",
      description: "Buy this galaxy to +10.000.000 click per second",
      quantity: props.shop.galaxy.quantity,
      value: props.shop.galaxy.value,
      image: galaxy,
      click: "galaxy",
    },
  ]
}

export default getShopItems;
