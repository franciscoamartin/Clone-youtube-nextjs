import React from 'react';
import { Box, Grid } from '@material-ui/core';
import VideoCard from '../components/VideoCard';
import Layout from '../components/Layout';

function Home({ data }) {
  return (
    <Layout title="Youtube">
      Clone youtube
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item) => (
            <Grid key={item.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  );
}
export async function getStaticProps() {
  const data = [
    {
      id: 1,
      title: 'NEXT JS Rotas Estaticas',
      authorId: 1,
      authorName: 'Johnson B',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/thumb.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: 'NEXT JS Rotas Estaticas',
      authorId: 1,
      authorName: 'Johnson B',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/thumb.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: 'NEXT JS Rotas Estaticas',
      authorId: 1,
      authorName: 'Johnson B',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/thumb.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
    {
      id: 4,
      title: 'NEXT JS Rotas Estaticas',
      authorId: 1,
      authorName: 'Johnson B',
      authorAvatar: 'avatarUrl',
      views: 10,
      thumb: '/thumbs/thumb.png',
      videoUrl: 'url',
      updatedAt: new Date(),
    },
  ];
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Home;
