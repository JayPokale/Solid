const ArticleMain = () => {
  return (
    <main class="max-w-2xl w-full px-4">
      <div class="w-full py-4 border-b flex justify-between">
        <div class="flex gap-3">
          <img
            src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
            alt="name here"
            class="w-12 h-12 rounded-full"
          />
          <div class="flex flex-col justify-evenly">
            <p class="text-sm">Name of Writer</p>
            <p class="text-xs text-gray-600">His/her information</p>
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm">
          <p class="cursor-pointer">Follow</p>
          <p class="cursor-pointer">Visit</p>
        </div>
      </div>
      <article class="py-4">
        <h1
          class="text-2xl font-bold pb-2"
          style={{ "font-family": "Raleway, sans-serif" }}
        >
          Hello There, This is a heading tag of the respected article. I hope
          this heading looks good. If not... then skip to the good part...
        </h1>
        <h2
          class="text-xl text-gray-500 pb-2"
          style={{ "font-family": "Raleway, sans-serif" }}
        >
          This will be the subheading of the article
        </h2>
        <img
          src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt="Article thumbnail"
          class="py-4"
        />
        <div
          class="text-justify space-y-4 py-4 indent-12 text-lg"
          style={{ "font-family": "Inter" }}
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab,
            nesciunt. Odit cupiditate iste cum, maxime eum quo eos assumenda,
            modi sit eveniet quod animi veritatis voluptates asperiores nulla
            exercitationem dignissimos, ipsa accusamus consequatur! Voluptas
            possimus delectus dolores iusto explicabo animi aperiam totam
            dolorem neque quos, blanditiis quaerat officiis expedita suscipit
            sequi? Temporibus incidunt eius expedita nobis ea numquam error sit
            illum voluptate pariatur vitae perspiciatis culpa laudantium
            excepturi, iure aspernatur in tenetur nam ipsam amet. Aut eum magni
            sequi. Placeat consequatur laudantium nemo tenetur hic quibusdam
            accusamus aliquid enim. Iure laborum libero ut odit voluptate totam
            incidunt at deserunt quaerat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            totam aliquam, officia dolores quia sed explicabo fuga, perferendis
            dolorum eligendi porro harum debitis accusantium ipsa. Voluptatibus
            odit sunt, magni nobis enim exercitationem facere suscipit nesciunt
            repellat amet quod facilis, harum asperiores! Deleniti quam
            quibusdam totam saepe dolor, magni accusantium officiis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            eligendi est ipsum maxime minima iusto? Atque praesentium rem
            ratione repudiandae voluptas autem suscipit nisi, mollitia molestiae
            saepe id quidem. Amet quas aliquam libero exercitationem quasi
            soluta, molestias repudiandae eaque non nostrum, labore incidunt!
            Incidunt, iure qui optio molestias ullam dolore, repudiandae a, at
            quidem rerum exercitationem culpa? Ab cumque quam nisi animi
            reprehenderit quasi architecto! Labore reiciendis odio quaerat dicta
            esse amet sed saepe laudantium accusantium facilis? Nostrum optio ex
            cumque ipsam magni velit hic eligendi voluptatum, corporis provident
            cupiditate, unde rem. Nihil non quam labore quisquam quaerat ad
            sapiente pariatur modi, nesciunt recusandae, similique excepturi.
            Dolorum, minus obcaecati nisi ducimus modi atque blanditiis natus
            temporibus, ea vel incidunt quaerat aspernatur quasi. Totam natus
            illo esse, architecto officiis mollitia praesentium labore aliquam
            non? Sed, earum! Est suscipit dignissimos doloremque? At iure eius
            dolor cumque illum quibusdam repellat nihil veniam voluptatum, ipsum
            velit corrupti officia a ex optio tempora debitis placeat, nam
            incidunt nesciunt ut! Id cum fugiat error recusandae blanditiis
            nihil asperiores nobis sed. Magnam reiciendis, vel porro consectetur
            repellendus possimus tempore hic nihil libero! Soluta sed sapiente,
            consequuntur optio minus fugit tempora, ducimus pariatur est eius ad
            tempore id.
          </p>
        </div>
      </article>
    </main>
  );
};

export default ArticleMain;
