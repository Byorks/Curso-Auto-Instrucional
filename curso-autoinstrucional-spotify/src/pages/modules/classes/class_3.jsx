import Class from "../../../components/class/class";
import { Typography, Box, styled } from "@mui/material";

const Paragraph = styled("p")(({ theme }) => ({
  ...theme.typography.body1,
  padding: theme.spacing(1),
}));

export default function Class3() {
  let cover3 =
    "https://p0.piqsels.com/preview/473/1013/227/netherlands-neede-galaxy-s8.jpg";
  return (
    <Class cover={cover3}>
      <article>
        <Typography variant="h2" component="h1" gutterBottom>
          Compartilhar e manter sua playlist
        </Typography>
        <Paragraph>
          Compartilhar sua playlist é uma forma de mostrar seu estilo, se
          conectar com amigos e até ganhar seguidores que gostam da mesma vibe
          musical que você. Além disso, uma playlist não precisa ser estática:
          com pequenas atualizações, ela pode continuar relevante e atrativa ao
          longo do tempo.
        </Paragraph>

        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Como compartilhar sua playlist
          </Typography>

          <Paragraph>
            Criar é só o primeiro passo. Para que sua playlist tenha impacto,
            você precisa divulgá-la. O Spotify oferece diferentes formas de
            compartilhamento tanto no celular quanto no computador.
          </Paragraph>

          <Typography variant="h5" component="h3">
            No celular
          </Typography>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>Abra sua playlist.</li>
            <li>Toque nos três pontinhos (⋮).</li>
            <li>
              Clique em <strong>Compartilhar</strong>.
            </li>
            <li>
              Escolha o destino:{" "}
              <em>Copiar link, WhatsApp, Instagram Stories, Twitter…</em>.
            </li>
          </Box>

          <Typography variant="h5" component="h3">
            No computador
          </Typography>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>Clique com o botão direito na playlist.</li>
            <li>
              Selecione <strong>Compartilhar.</strong>
            </li>
            <li>Copie o link ou publique direto em uma rede social.</li>

            {/* Inserir Box de dica */}
          </Box>
          <Paragraph>
            💡 <strong>Dica</strong>: No Instagram, a playlist aparece com a
            capa personalizada, tornando a divulgação mais bonita e chamativa.
          </Paragraph>
        </section>
      </article>
      <article>
        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Playlists colaborativas
          </Typography>
          <Paragraph>
            Além de compartilhar, você pode tornar sua playlist{" "}
            <strong>colaborativa</strong>. Nesse formato, amigos podem adicionar
            músicas, tornando a experiência coletiva e mais dinâmica.
          </Paragraph>
          <Box
            component="ul"
            sx={{ listStyleType: "disc", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>As playlists colaborativas são vivas, sempre se renovando.</li>
            <li>
              Podem ser usadas em grupos de amigos, festas ou equipes de
              trabalho.
            </li>
            <li>
              Exemplo: <em>“Som do rolê da galera 🎉”</em>, onde cada pessoa
              adiciona músicas que curte.
            </li>
          </Box>
        </section>
      </article>
      <article>
        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Como manter sua playlist viva
          </Typography>
          <Paragraph>
            Uma boa playlist não é criada apenas uma vez — ela evolui. Para que
            continue atraente, siga algumas práticas de manutenção:
          </Paragraph>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>
              <strong>Atualize regularmente</strong> – troque ou adicione
              músicas a cada semana ou mês.
            </li>
            <li>
              <strong>Crie versões sazonais</strong> – por exemplo, Summer Vibes
              2025 e depois Summer Vibes 2026.
            </li>
            <li>
              <strong>Peça feedback</strong> – amigos podem sugerir faixas
              novas.
            </li>
            <li>
              <strong>Monitore o mood</strong> – se alguma música já não combina
              mais, remova.
            </li>
          </Box>
        </section>
      </article>
      <article>
        <section className="py-5 m-2">
          <Typography variant="h4" component="h2">
            Atividade prática: compartilhando e atualizando
          </Typography>
          <Paragraph>
           Para fixar o aprendizado, você vai realizar uma atividade simples e prática:
          </Paragraph>

          <Typography variant="h5" component="h3">
            Passo a passo
          </Typography>
          <Box
            component="ol"
            sx={{ listStyleType: "num", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>
              <strong>Compartilhe sua playlist</strong> com pelo menos uma pessoa.
            </li>
            <li>
              <strong>Peça uma sugestão de música</strong> para adicionar.
            </li>
            <li>
             <strong>Inclua essa música</strong>, se fizer sentido para a vibe da playlist.
            </li>
          </Box>
          <Paragraph>
            ✅ Ao final, você terá:
          </Paragraph>
          <Box
            component="ul"
            sx={{ listStyleType: "disc", pl: 4, display: "grid", gap: "8px" }}
          >
            <li>Uma playlist publicada e acessível.</li>
            <li>Uma primeira interação real com outra pessoa.</li>
            <li><strong>Um plano de atualização contínua</strong> para mantê-la viva.</li>
          </Box>

        </section>
      </article>
    </Class>
  );
}
