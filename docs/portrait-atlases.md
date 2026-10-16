# 新增 88 位名人的肖像素材

使用内置 imagegen 生成 8 张新图集，以 WebP 编码保存在 `dist/assets/portraits-01.webp` 至 `portraits-08.webp`。保留原有 `portraits.png` 和前 12 幅作品的稳定编号，总计 100 幅。

前 7 张为 4 列 × 3 行，最后一张为 2 列 × 2 行。每张内均按从左到右、从上到下读取。人物为 AI 绘制的艺术化演绎；古代人物的外貌属于创作性诠释。

[完整名单及编号](portrait-catalog.md)对应 `dist/portraits.js`。运行时通过 CSS 纹理定位显示肖像，融化动画读取同一张图集和同一格；无需远程头像 API。

## 图集 01 · 作品 13–24

文件：`dist/assets/portraits-01.webp`

最终生成提示词：

```text
Use case: stylized-concept. Asset type: ONE production texture atlas for the existing Portrait Atelier game. A precise equal-cell grid, every cell SQUARE, edge-to-edge with no gutters, no borders, no text, no labels, no watermarks. Uniform charming sophisticated hand-painted oil-painting / soft dimensional clay portrait illustration, museum art character, rich muted colors, lightly visible brushwork, warm studio lighting. Each person is a different clearly recognizable bust portrait, head and shoulders centered with safe headroom, nuanced expressive face, background in muted sage, teal, ochre or dusty rose. Depict named public figures faithfully and recognizably as adults in their iconic appearance. Not photorealistic, not generic avatars, no duplicate faces. Exactly FOUR columns by THREE rows, landscape 4:3 overall canvas. The exact left-to-right row-major subjects are:
1. Charles Darwin, elderly bald naturalist with long white beard and dark Victorian coat
2. Marie Curie, dark hair in a bun, thoughtful face and navy laboratory dress
3. Nikola Tesla, slick dark hair, thin moustache and sharp black suit
4. Stephen Hawking, glasses and wheelchair headrest, warm expressive smile
5. Galileo Galilei, white beard, Renaissance brown scholar robe
6. Nicolaus Copernicus, Renaissance dark bob hair, red fur-trimmed scholarly coat
7. Thomas Edison, swept white hair, clean shaven, bow tie and dark suit
8. Alan Turing, young clean shaven British mathematician, neat side parted dark hair, tweed suit
9. Wolfgang Amadeus Mozart, white powdered wig and crimson eighteenth century coat
10. Johann Sebastian Bach, white curly wig, black baroque coat
11. Frédéric Chopin, wavy chestnut hair, slender romantic face and black cravat
12. Pyotr Ilyich Tchaikovsky, short gray hair, pointed gray beard and dark nineteenth century suit
Maintain exact order and exact number of cells. Each cell is occupied by exactly one person.
```

## 图集 02 · 作品 25–36

文件：`dist/assets/portraits-02.webp`

最终生成提示词：

```text
Use case: stylized-concept. Asset type: ONE production texture atlas for the existing Portrait Atelier game. A precise equal-cell grid, every cell SQUARE, edge-to-edge with no gutters, no borders, no text, no labels, no watermarks. Uniform charming sophisticated hand-painted oil-painting / soft dimensional clay portrait illustration, museum art character, rich muted colors, lightly visible brushwork, warm studio lighting. Each person is a different clearly recognizable bust portrait, head and shoulders centered with safe headroom, nuanced expressive face, background in muted sage, teal, ochre or dusty rose. Depict named public figures faithfully and recognizably as adults in their iconic appearance. Not photorealistic, not generic avatars, no duplicate faces. Exactly FOUR columns by THREE rows, landscape 4:3 overall canvas. The exact left-to-right row-major subjects are:
1. Franz Schubert, round eyeglasses, curly dark hair, sideburns and black bow tie
2. Franz Liszt, long straight gray hair to shoulders, clean shaven, black cassock
3. Richard Wagner, large sideburns, black velvet beret and brown coat
4. Claude Debussy, dark curly hair and short full beard, light brown suit
5. William Shakespeare, receding dark hair, moustache and pointed beard, Elizabethan white ruff
6. Jane Austen, Regency white bonnet, brown curls and ivory dress
7. Charles Dickens, swept brown hair, pointed full beard and Victorian waistcoat
8. Mark Twain, wild white hair, thick white moustache and white suit
9. Ernest Hemingway, white beard, short hair and ivory fisherman's sweater
10. Leo Tolstoy, long white beard, bushy eyebrows and rustic cream tunic
11. Rabindranath Tagore, flowing long white hair and beard, deep indigo Indian robe
12. Victor Hugo, thick swept white hair and beard, black coat
Maintain exact order and exact number of cells. Each cell is occupied by exactly one person.
```

## 图集 03 · 作品 37–48

文件：`dist/assets/portraits-03.webp`

最终生成提示词：

```text
Use case: stylized-concept. Asset type: ONE production texture atlas for the existing Portrait Atelier game. A precise equal-cell grid, every cell SQUARE, edge-to-edge with no gutters, no borders, no text, no labels, no watermarks. Uniform charming sophisticated hand-painted oil-painting / soft dimensional clay portrait illustration, museum art character, rich muted colors, lightly visible brushwork, warm studio lighting. Each person is a different clearly recognizable bust portrait, head and shoulders centered with safe headroom, nuanced expressive face, background in muted sage, teal, ochre or dusty rose. Depict named public figures faithfully and recognizably as adults in their iconic appearance. Not photorealistic, not generic avatars, no duplicate faces. Exactly FOUR columns by THREE rows, landscape 4:3 overall canvas. The exact left-to-right row-major subjects are:
1. Pablo Picasso, bald head, deep eyes, Breton striped shirt
2. Claude Monet, elderly painter, long flowing white beard, round straw hat and gray coat
3. Pierre-Auguste Renoir, short reddish beard, soft brim hat and brown painter coat
4. Rembrandt van Rijn, round face, soft brown beret and dark seventeenth century coat
5. Johannes Vermeer, shoulder length chestnut curls, black beret and Dutch ochre painter coat
6. Michelangelo Buonarroti, Renaissance short curly hair, broken nose, short gray beard and dark robe
7. Raphael, young Renaissance painter with long brown hair, black beret and crimson velvet coat
8. Andy Warhol, silver white spiky wig, round glasses and black turtleneck
9. Li Bai, Chinese Tang dynasty poet, high scholar cap, long thin black beard and flowing ivory robe
10. Du Fu, aged Chinese Tang poet, narrow weathered face, thin graying beard and plain brown scholar robe
11. Su Shi, smiling Chinese Song scholar, broad face, short beard, tall black scholar hat and blue-gray robe
12. Li Qingzhao, elegant Chinese Song dynasty woman poet, dark hair in an updo with jade hairpin, ivory and sage Hanfu
Maintain exact order and exact number of cells. Each cell is occupied by exactly one person.
```

## 图集 04 · 作品 49–60

文件：`dist/assets/portraits-04.webp`

最终生成提示词：

```text
Use case: stylized-concept. Asset type: ONE production texture atlas for the existing Portrait Atelier game. A precise equal-cell grid, every cell SQUARE, edge-to-edge with no gutters, no borders, no text, no labels, no watermarks. Uniform charming sophisticated hand-painted oil-painting / soft dimensional clay portrait illustration, museum art character, rich muted colors, lightly visible brushwork, warm studio lighting. Each person is a different clearly recognizable bust portrait, head and shoulders centered with safe headroom, nuanced expressive face, background in muted sage, teal, ochre or dusty rose. Depict named public figures faithfully and recognizably as adults in their iconic appearance. Not photorealistic, not generic avatars, no duplicate faces. Exactly FOUR columns by THREE rows, landscape 4:3 overall canvas. The exact left-to-right row-major subjects are:
1. Xin Qiji, Chinese Song dynasty poet and warrior, strong face, short beard, black scholar cap and dark blue robe
2. Bai Juyi, refined Chinese Tang dynasty poet, thin moustache and beard, soft black official hat and ivory robe
3. Lu Xun, Chinese writer, short upright dark hair, distinctive square moustache, serious face and charcoal changshan
4. Lao She, Chinese writer, round spectacles, thinning dark hair, warm face and beige mandarin collar jacket
5. Bing Xin, elderly Chinese woman writer, silver hair in a low bun, round eyeglasses and soft blue qipao
6. Eileen Chang, Chinese writer, narrow elegant face, short waved dark hair, vivid patterned vintage qipao
7. Qian Zhongshu, elderly Chinese scholar, round glasses, receding hair and gray mandarin collar jacket
8. Ba Jin, elderly Chinese writer, swept silver hair, rectangular glasses and dark gray jacket
9. Wang Xizhi, Chinese Eastern Jin calligrapher, flowing black beard, simple scholar headcloth and white robe
10. Qi Baishi, elderly bald Chinese painter, long white beard, round spectacles and black scholar robe
11. Zhang Daqian, Chinese painter, long dark beard, bushy eyebrows, black scholar cap and ivory robe
12. Xu Beihong, Chinese painter, thick dark hair, clean shaven angular face and dark Zhongshan suit
Maintain exact order and exact number of cells. Each cell is occupied by exactly one person.
```

## 图集 05 · 作品 61–72

文件：`dist/assets/portraits-05.webp`

最终生成提示词：

```text
Use case: stylized-concept. Asset type: ONE production portrait texture atlas for Portrait Atelier. Exactly FOUR columns by THREE rows, landscape 4:3 canvas. Every cell SQUARE and edge-to-edge, no gutters or borders, no text, labels, logos or watermarks. Uniform charming refined hand-painted oil and softly dimensional clay illustration hybrid, rich muted colors, delicate brush texture, warm studio lighting, bust portraits head and shoulders centered with safe headroom against muted sage, teal, ochre or dusty rose. All are named public figures; make each faithful, recognizable, adult, iconic, and distinct, NOT generic faces or photographs. Exact left-to-right row-major order:
1. Mei Lanfang, Chinese Peking opera dan-role performer, ornate blue pearl headdress and red embroidered costume
2. Bruce Lee, iconic yellow tracksuit, black stripe and short dark hair
3. Jackie Chan, warm broad smile, rounded nose and cream mandarin jacket
4. Jet Li, short dark hair and charcoal martial arts tunic
5. Michelle Yeoh, long wavy black hair and emerald gown
6. Gong Li, strong brows, long black hair and ivory silk blouse
7. Zhang Ziyi, elegant oval face, black updo and red silk gown
8. Teresa Teng, short curled dark hair, soft rounded face and pastel pink dress
9. Leslie Cheung, handsome Hong Kong singer, parted dark hair and plum suit
10. Anita Mui, short pixie black hairstyle and dramatic black velvet outfit
11. Jay Chou, angular face, tousled dark hair and black jacket
12. Andy Lau, handsome angular face, neat dark hair and gray suit
Maintain this exact order and exact number of cells, each occupied by exactly one named person.
```

## 图集 06 · 作品 73–84

文件：`dist/assets/portraits-06.webp`

最终生成提示词：

```text
Use case: stylized-concept. Create ONE game texture atlas of twelve historical adult portraits. Exactly FOUR equal columns by THREE equal rows, landscape 4:3 canvas; every cell square, edge-to-edge, no gutters, frames, text, labels, logos, or watermarks. Elegant hand-painted oil portrait illustration, warm studio lighting, visible soft brushwork, rich muted sage, teal, ochre and dusty rose backgrounds. Each subject is a distinct historical adult, centered head-and-shoulders bust, fully dressed with modest neckline and safe headroom. Faithful expressive artistic interpretation of the following exact left-to-right row-major subjects:
1. Ada Lovelace, Victorian British mathematician, dark curled updo and modest sapphire nineteenth century dress
2. Grace Hopper, elderly American computer scientist, short gray hair, kind expression and navy uniform jacket
3. Katherine Johnson, African American mathematician, short curled hair, round eyeglasses and modest burgundy dress
4. Hedy Lamarr, Austrian American inventor and actress, dark side parted waves and modest ivory blouse
5. Rosalind Franklin, British scientist, short dark wavy bob and modest white laboratory coat
6. Florence Nightingale, Victorian nurse, center parted hair and traditional white nursing cap over dark modest dress
7. Amelia Earhart, American aviator, short tousled brown hair, leather flight cap and brown aviator jacket
8. Helen Keller, American writer, mature face, softly swept dark hair and modest cream high collar dress
9. Anne Sullivan, American educator, dark Victorian updo, small round glasses and dark plum high collar dress
10. Coco Chanel, French designer, dark bob hairstyle, simple hat, black tweed jacket and pearl necklace
11. Josephine Baker, African American French singer, short sculpted dark hair, pearl earrings and modest emerald stage gown
12. Ella Fitzgerald, African American jazz singer, short curly dark hair, warm round face and modest violet gown
Keep this exact order and one portrait per cell.
```

## 图集 07 · 作品 85–96

文件：`dist/assets/portraits-07.webp`

最终生成提示词：

```text
Use case: stylized-concept. Create ONE game texture atlas of twelve historical adult portraits. Exactly FOUR equal columns by THREE equal rows, landscape 4:3 canvas; every cell square, edge-to-edge, no gutters, frames, text, labels, logos, or watermarks. Elegant hand-painted oil portrait illustration, warm studio lighting, visible soft brushwork, rich muted sage, teal, ochre and dusty rose backgrounds. Each subject is a distinct historical adult, centered head-and-shoulders bust, fully dressed with modest neckline and safe headroom. Faithful expressive artistic interpretation of the following exact left-to-right row-major subjects:
1. Louis Armstrong, African American jazz musician, short dark hair, broad warm smile and black tuxedo, small brass trumpet held at chest
2. Duke Ellington, African American jazz pianist, slick dark hair, thin moustache and elegant black tuxedo
3. Charlie Parker, African American jazz saxophonist, round face, short hair and dark navy suit
4. Nina Simone, African American jazz singer and pianist, short natural dark hair, expressive eyes and modest golden blouse
5. Billie Holiday, African American jazz singer, white gardenia in dark waved hair and modest red gown
6. Edith Piaf, French singer, short curly dark hair, expressive face and simple modest black dress
7. Enrico Caruso, Italian opera tenor, neatly parted dark hair, round face and Edwardian black tailcoat
8. Luciano Pavarotti, Italian opera tenor, curly dark hair, full beard, warm broad smile and black tuxedo with white scarf
9. Maria Callas, Greek American opera soprano, dark updo, strong brows and modest dark red gown
10. Ingrid Bergman, Swedish actress, neatly waved brown hair, serene face and modest sage blouse
11. Greta Garbo, Swedish actress, 1930s waved dark hair, strong cheekbones and modest cream dress
12. Vivien Leigh, British actress, dark wavy hair, arched brows and modest emerald vintage dress
Keep this exact order and one portrait per cell.
```

## 图集 08 · 作品 97–100

文件：`dist/assets/portraits-08.webp`

最终生成提示词：

```text
Use case: stylized-concept. Asset type: ONE production portrait texture atlas for Portrait Atelier. Exactly TWO columns by TWO rows, square canvas. Every cell SQUARE and edge-to-edge, no gutters or borders, no text, labels, logos or watermarks. Uniform charming refined hand-painted oil and softly dimensional clay illustration hybrid, rich muted colors, delicate brush texture, warm studio lighting, bust portraits head and shoulders centered with safe headroom against muted sage, teal, ochre or dusty rose. All are named public figures; make each faithful, recognizable, adult, iconic, and distinct, NOT generic faces or photographs. Exact left-to-right row-major order:
1. Yao Ming, recognizable Chinese basketball player, broad warm smile, short dark hair and red basketball jersey without logos
2. Lang Ping, recognizable Chinese woman volleyball coach, short dark hair, kind strong face and red sports jacket without logos
3. Su Bingtian, recognizable Chinese male sprinter, short upright dark hair, athletic face and red athletics jersey without logos
4. Eileen Gu, recognizable Chinese American freestyle skier, long honey brown hair, bright smile and pale blue winter ski jacket without logos
Maintain this exact order and exact number of cells, each occupied by exactly one named person.
```

