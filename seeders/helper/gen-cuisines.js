const cuisineLists = [
    '24f086e7-1f3f-4d10-beda-b8349af0ca9d',
    '3baadf90-cd14-40fe-a9c1-428e0e27fe45',
    '0e45a503-b977-4764-ad01-f17536ccdc84',
    '6cf7bfba-5b51-40a9-ae27-36060d0c1c83',
    'd0f51ffa-729e-4b45-b3cc-73666387bab8',
    '68efaa9b-c301-43c0-8631-adb36d7cd7a0',
    '00e2479d-9a57-43fa-8f7f-a43cb376b034',
    '72876311-8c46-43dd-928a-4a77cf43ac66',
    'a3289691-4736-46ab-af8a-3571c53ded64',
    '43875a7d-e8e2-4296-aefc-1d27b6a415b0',
    'a14972c1-e2ea-48ae-a061-e0de3daf0666',
    'c9b0f66c-3896-4787-b109-06078d31cab8',
    'f9b048f2-3a33-4d4b-9796-338c06cd3a22',
    'dd367a0c-3e15-4af8-bbde-3ed1e1cd84c7',
    '6a3b7a20-9eae-4d39-ac34-2d0571f990dc',
    'efb2e645-2890-4387-ba82-6794cc4df785',
    '6d1ae2a2-a2bb-48c4-82f7-201b4450f9b0',
    '34c242e5-cb53-4a79-b71e-872de0b9913f',
    '266857be-3990-44a2-b2f2-709588f5a885',
    '98e31621-ecfc-4976-a507-ab2f167d69ce'
]

function generateCuisines() {
    const randomImageIndex = Math.floor(Math.random() * cuisineLists.length);
    return cuisineLists[randomImageIndex]
}

module.exports = { generateCuisines, cuisineLists }