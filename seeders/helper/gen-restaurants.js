const restaurantList = [
  'e18d23f4-2451-4989-8a2a-b887acca8371',
  '4e985e18-ea13-47d2-97a5-69eb55cdeab8',
  'da2317cc-e148-4294-9b6d-9fb698c1e528',
  '8eed51d3-66e9-4720-9580-226a7f9734cf',
  'e7e42456-b9ad-41fd-b570-aea85887b6b1',
  '4e2a3299-7d91-4eef-8df4-31ca2b7d42ce',
  'd9a0f22a-228c-46b0-ac11-7b4a0ec1165d',
  '56ab8137-2059-4958-8514-317c564eeefb',
  'beb38c58-b372-491e-8ed3-cb98a96822fc',
  '7c5f953c-569a-4603-87d1-875bd87be935',
  'b8619dd0-4422-4e31-8cff-862d696a98d6',
  '4f8f1ac7-9a84-4630-a09a-8fc6ed83e4f2',
  'e44dab7a-e268-4164-afc1-a82ea7c7e2ce',
  '4c112776-5fea-4d36-919b-709127a90ebf',
  'f3d62104-f386-4f99-935c-98c4b2e3d558',
  '82b555cc-1cff-4884-ac01-011f92c75d18',
  'dd2dca4f-9ac4-4ae2-a94e-6b8afcd45d7e',
  '16e4843e-1eff-4984-ac4e-f64862eca85a',
  '75babbde-8129-4798-b71a-3e7ac03dfc60',
  '92ec8fac-e443-414d-a219-686bedcfb5c3',
]

function generateRestaurants() {
  const randomImageIndex = Math.floor(Math.random() * restaurantList.length)
  return restaurantList[randomImageIndex]
}

module.exports = { generateRestaurants, restaurantList }
