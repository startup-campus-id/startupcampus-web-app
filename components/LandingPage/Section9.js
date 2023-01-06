import AddIcon from '@mui/icons-material/Add';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

import HighlightText from '../HighlightText';
import MyButton from '../MyButton';

function Section9({ faq }) {
  const [state, setState] = useState(5);
  let qna = faq?.slice(0);

  return (
    <Grid container spacing={3} my={6} py={6} id="faq">
      <Grid item xs={12} data-aos="fade-down">
        <Typography variant="h4" textAlign="center" fontWeight={700}>
          <HighlightText width="-2%">Frequently</HighlightText> Asked Questions
        </Typography>
      </Grid>
      {qna.slice(0, state).map((item, idx) => (
        <Grid
          key={idx}
          item
          xs={12}
          display="flex"
          justifyContent={'center'}
          data-aos="fade-left"
        >
          <Stack width={980}>
            <Accordion
              sx={{
                boxShadow: '0px 8px 20px rgba(43, 44, 39, 0.1)',
                padding: '1em',
              }}
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls={'panel1a-content-' + idx}
                id={'panel1a-header-' + idx}
              >
                <Typography variant="h6" component="h1" fontWeight={600}>
                  {item?.fields.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Divider />
                <Typography mt={4} variant="body2" color="sc_gray.dark">
                  <ReactMarkdown>{item?.fields.answer}</ReactMarkdown>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Grid>
      ))}
      {
        <Grid item xs={12} display="flex" justifyContent={'center'}>
          {state < faq.length ? (
            <MyButton onClick={() => setState((prev) => prev + 5)}>
              Lihat lebih banyak
            </MyButton>
          ) : (
            <MyButton onClick={() => setState(5)}>Lihat lebih sedikit</MyButton>
          )}
        </Grid>
      }
    </Grid>
  );
}

export default Section9;
