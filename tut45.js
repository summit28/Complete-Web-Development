//Introduction to node.js
//Backend is serving file according to user request
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>CSS Grid-Creating Layouts Using Grid Template Area </title>
      <style>
          .container {
              display: grid;
              grid-gap: 1rem;
              grid-template-areas:
                  'navbar navbar navbar navbar'
                  'section section section aside'
                  'footer footer footer footer';
          }
  
          .item {
              background-color: yellow;
              border: 2px solid black;
              padding: 12px 23px;
          }
  
          #navbar{
              grid-area: navbar;
          }
  
          #section{
              grid-area: section;
          }
  
          #aside{
              grid-area: aside;
          }
  
          footer{
              grid-area: footer;
          }
      </style>
  </head>
  
  <body>
      <div class="container">
          <div id="navbar" class="item">
  
              Home About Contact us
          </div>
          <div id="section" class="item">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati vitae aliquam, hic labore ea impedit quis deleniti quidem nihil similique optio Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ratione animi dolore sunt tempore hic explicabo dolorum inventore amet voluptatum consequatur facere tempora, est ipsa quis laboriosam doloremque, sapiente earum. Sunt unde, quis cumque modi aspernatur necessitatibus beatae voluptatem facilis totam est maxime perspiciatis ipsa suscipit ea amet aut reiciendis eveniet quos fugit libero recusandae ullam magni repellendus. Nemo amet dolores molestiae quasi sunt, recusandae veritatis quos aperiam, libero illum maiores ut assumenda blanditiis voluptatum incidunt corrupti. Nostrum, maxime? Vitae aperiam consequatur laboriosam inventore ipsa ex earum. Omnis assumenda aperiam nobis natus! Laudantium inventore illum quis? Nam, officia voluptatem! Vitae eaque illum blanditiis dolor quas est natus, suscipit ratione libero perferendis nihil voluptatum delectus perspiciatis dolore, cum nesciunt aspernatur, voluptas numquam voluptatibus deserunt repellendus ex? Velit dignissimos deserunt modi, nobis eveniet ullam tenetur necessitatibus aliquam labore qui nihil, error veritatis voluptatem id quas minus unde, illo ipsa obcaecati iste! Magnam fugit illum aliquam ea consequatur inventore, ducimus veniam hic quo repudiandae cupiditate doloribus qui perferendis unde ipsa obcaecati quos voluptas voluptatem nemo molestias. Magni praesentium dolorem aliquam natus molestiae repudiandae optio laudantium veniam dicta eum cum, sint, dolore voluptate sequi minima iusto asperiores, expedita tempora facilis velit culpa? Eos doloremque ipsam velit fuga officia, veritatis ad blanditiis quam, perspiciatis quibusdam error quasi expedita neque odio ex harum vel cumque sed molestiae dolore hic vitae ea. Eveniet eos, excepturi rerum, quasi, eum ipsam porro cum fugit consequatur totam voluptatem? Corporis, architecto nulla nobis repellendus deserunt porro corrupti aperiam nihil odio odit molestiae soluta nam quia laborum accusamus. Eum repellat maiores unde placeat, at porro facilis est, quod quis quisquam dicta consequatur, accusamus mollitia reiciendis voluptatibus illo ut modi asperiores! Necessitatibus a optio tempore, perferendis explicabo maxime quas molestiae modi et voluptatum, commodi ad expedita dolorum quisquam voluptatibus laudantium recusandae hic cum error odio adipisci. Aliquid ipsa doloremque nam magnam fugit nulla facilis eligendi quaerat reiciendis blanditiis tenetur, corporis quia, maxime perspiciatis quos nobis ab asperiores sapiente dolores sint? Numquam ea animi omnis modi, nihil ipsum nobis obcaecati hic repellat fuga eius, vel atque consequatur eaque a temporibus perferendis facilis minus tempora labore explicabo esse! Corrupti hic accusantium corporis alias facilis nemo provident sequi sit dolorem amet similique itaque, dolores, eius, sed ducimus? Nesciunt obcaecati eum, repudiandae accusamus porro perspiciatis placeat aliquam ducimus animi quasi ab voluptatem assumenda similique tempore alias nobis eos ullam enim, odio eius in. Eius aspernatur consequuntur distinctio.voluptate officia!
          </div>
          <div id="aside" class="item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aperiam illo, voluptatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae culpa voluptate vero corrupti nulla consequuntur maiores tempore totam quam nostrum. Harum tenetur repellendus tempore temporibus autem dignissimos expedita vitae libero, sequi a obcaecati nostrum nisi assumenda porro nemo eius sapiente ullam reiciendis excepturi. Explicabo assumenda illo eaque, nesciunt est rerum nam ab? At soluta unde, ipsa commodi nisi dignissimos, quaerat veniam odio similique neque quidem nam fugiat quasi quis, saepe consequatur. Maxime iusto perspiciatis illum deserunt dolores doloremque sed laborum, modi minima error nisi provident tenetur temporibus officia mollitia molestias nulla! Nisi laborum nesciunt sequi ab fuga officia ratione repudiandae accusamus natus minima, vitae, porro necessitatibus expedita! Repudiandae delectus sint doloribus modi dolore adipisci laudantium! Sapiente quo cumque sint sequi officiis. Quo, aliquid nihil? Deleniti, error officia hic consectetur quia qui voluptatem est ut, accusantium quod eius officiis maxime ipsa! Optio ad, autem doloribus consectetur ipsa in quod, voluptates a aliquid cum alias accusantium, veritatis doloremque natus eius quasi excepturi voluptate cupiditate vel molestiae repellat eum dolorum labore! Laborum possimus eveniet iusto eum cumque odio eius illo, alias quia consequatur nesciunt numquam dolorem non cum perferendis nemo inventore dolore facere esse ut vel rerum. Necessitatibus totam ipsum commodi cum aut unde quisquam dolores iusto saepe eius quibusdam cupiditate earum sapiente, accusamus sunt ducimus quod magnam. Molestiae corporis voluptates nisi. Suscipit earum quod laudantium a dolores reprehenderit? Quidem labore, praesentium doloremque atque assumenda ut eius? Quas minus nostrum recusandae ea necessitatibus impedit totam adipisci, eum perspiciatis et nulla enim dolorem autem nisi molestiae? Harum tenetur, quas quaerat incidunt odio veritatis eos rerum nisi. Vero maxime suscipit eos magnam cupiditate, eaque, voluptas sapiente esse sunt delectus reiciendis reprehenderit placeat atque amet et quam architecto aut facilis iure magni corporis incidunt repudiandae debitis. Dignissimos, nesciunt! Dolorem minima doloribus vero laudantium quis. Quo odio perspiciatis nihil numquam veritatis, animi, ratione commodi molestiae culpa architecto minus modi nulla maxime! Dolorum molestias fuga provident alias et! Quaerat non aut asperiores minus harum ipsa libero deleniti! Recusandae praesentium at sint, dolores numquam minus veritatis est perferendis consectetur, nulla nemo doloremque nisi laboriosam tempore minima dolore. Tenetur veritatis blanditiis, temporibus iusto itaque adipisci in laborum, esse doloremque exercitationem molestias. Voluptate enim doloribus fuga corrupti! Provident reiciendis ullam ipsam, cumque suscipit impedit vitae similique ab illum sed eaque sunt, distinctio eos nesciunt officiis sequi id, cupiditate veniam porro laborum. Delectus illo eaque illum nihil aliquid quaerat mollitia rem hic.rerum totam accusamus dolores rem minus? Totam exercitationem ratione delectus deleniti.
          </div>
          <footer class="item">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga officia sit repellat.
          </footer>
      </div>
  </body>
  </html>`);

});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});