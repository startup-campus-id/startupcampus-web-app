import { Link,Box, Grid, Stack, Typography, Card, CardActionArea } from '@mui/material';
import Image from 'next/image';
import React, { useEffect } from 'react';

import { testimoni } from '../../content/testimoni';
import HighlightText from '../HighlightText';

export default function Section6() {
  return (
    <Grid container my={8} spacing={4} justifyContent="center" id={'testimoni'}>
      <Grid item>
        <Typography variant="h4" fontWeight={700} data-aos="fade-down">
          Cerita <HighlightText width="-2%">Sukses</HighlightText> Alumni
          Startup Campus
        </Typography>
      </Grid>
      <Grid item container xs={12} spacing={3}>
        {testimoni.map((item) => (
          <Grid item md={4} key={item.name} data-aos="fade-up">
            <Card width="100%" borderRadius={'20px'} overflow="hidden" sx={{
              border: 'none',
              boxShadow: 'none'
            }}>
              <Link 
                href={item.url} 
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
              >
                <CardActionArea>
                  <Box
                    width="100%"
                    height={200}
                    borderRadius={'20px'}
                    overflow="hidden"
                    position={'relative'}
                    sx={{
                      transform: 'scale(1)',
                      '&:before': {
                        content: "''",
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      },
                    }}
                  ></Box>
                  <Stack py={3} spacing={{ xs: 0, md: 1 }}>
                    <Typography variant="h6" fontWeight={600} component="h1">
                      {item.name}
                    </Typography>
                    <Typography variant="subtitle1" color="sc_gray.dark">
                      {item.role}
                    </Typography>
                    <Typography variant="body2" color="sc_gray.dark">
                      {item.story}
                    </Typography>
                  </Stack>
                </CardActionArea>
              </Link>
            </Card>
          </Grid>
        ))}
        {/* <Grid
          item
          sx={{ display: "flex", justifyContent: "center" }}
          xs={12}
          data-aos="fade-down"
        >
          <MyButton>
            <Typography fontWeight={700}>Baca Cerita Lainnya</Typography>
          </MyButton>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
