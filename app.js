const albumCovers = ['https://images.squarespace-cdn.com/content/v1/5797eba5e58c6281302be8b2/1614170273774-VFQZQX2F2OP3FLFVZQGQ/NS+Front+Final.png?format=500w', 'https://images.squarespace-cdn.com/content/v1/5797eba5e58c6281302be8b2/1614170357192-SQM42TXKZDOFEW114SM2/final+cover+3000x3000+%28rgb%29.jpg?format=500w', 'https://images.squarespace-cdn.com/content/v1/5797eba5e58c6281302be8b2/1614170436449-X0D0FLGMPX1HM9FNBZ4K/TSA+cover+3k.jpg?format=500w', 'https://upload.wikimedia.org/wikipedia/en/9/97/Station_to_Station_cover.jpg', 'https://upload.wikimedia.org/wikipedia/en/7/70/Unknown_Pleasures_Joy_Division_LP_sleeve.jpg', 'https://upload.wikimedia.org/wikipedia/en/7/7f/Police-album-synchronicity.jpg', 'https://upload.wikimedia.org/wikipedia/en/a/a4/So_%28album%29.png', 'https://upload.wikimedia.org/wikipedia/en/f/f0/Letlovein.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Autobahn_2009.jpg/440px-Autobahn_2009.jpg', 'https://e.snmc.io/i/600/w/45f749f5839b1e9a7b9de2dd58afdf58/4184635/pink-floyd-wish-you-were-here-Cover-Art.png', 'https://e.snmc.io/i/600/w/d62c8c3b2c4365710ac9c3e05e94c11d/7999484/king-crimson-in-the-court-of-the-crimson-king-Cover-Art.jpg', 'https://e.snmc.io/i/600/w/ae9458f9d39d4075e84d68802d7ec476/8862252/radiohead-ok-computer-Cover-Art.jpg', 'https://e.snmc.io/i/600/w/abeec65ece1a2792e386c9c2a92ab06d/8879684/radiohead-kid-a-Cover-Art.jpg', 'https://e.snmc.io/i/600/w/95d380b3a07a63f7e483aeed2ae4b0b9/5395533/pink-floyd-the-dark-side-of-the-moon-Cover-Art.jpg', 'https://e.snmc.io/i/600/w/af0a0ea269ab2f6e2262764a4ba2df0e/6988068/the-velvet-underground-and-nico-the-velvet-underground-and-nico-Cover-Art.png', 'https://e.snmc.io/i/600/w/a115bb00075fcd27a8c53f9d92b1ea0a/8542182/david-bowie-the-rise-and-fall-of-ziggy-stardust-and-the-spiders-from-mars-Cover-Art.png', 'https://e.snmc.io/i/600/w/b4c9fde45ac54c7763540f096b878649/7426308/miles-davis-kind-of-blue-Cover-Art.jpg', 'https://e.snmc.io/i/600/w/dcd889ca2ad7b66eb80ad78af43a4f8a/7272164/the-cure-disintegration-Cover-Art.jpg', 'https://e.snmc.io/i/600/w/5f2d7490a369135d8b92915d8cf8a3a2/4175208/pink-floyd-animals-Cover-Art.png', 'https://e.snmc.io/i/600/w/36e385a85adce5821e624fd265724b4b/1816031/the-smiths-the-queen-is-dead-Cover-Art.jpg', 'https://e.snmc.io/i/600/w/8ac69491946eedf791c7bbda9131a69f/3677487/bob-dylan-highway-61-revisited-Cover-Art.jpg']

const displayAlbumCovers = function () {
    let albumCoverContainer = document.querySelector('albumCoverContainer')
    for (let i = 0; i < albumCovers.length; i++) {
        let rowOfCovers = document.createElement('div')
        rowOfCovers.classList.add('col-12')
        albumCoverContainer.appendChild(rowOfCovers)
        let oneCover = document.createElement('img')
        oneCover.setAttribute('src', i)
        oneCover.classList.add('album-cover')
        rowOfCovers.appendChild(oneCover)
    }
}

window.onload = function () {
    displayAlbumCovers()




}