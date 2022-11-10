import { Button, Grid, Paper, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import React from "react";

const Home: React.FC = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [countD, setCountD] = useState(0);
  const [running, setRunning] = useState(false);
  const [calculation, setCalculation] = useState(0);

  //useEffect sem dependência
  useEffect(() => {
    document.title = `Você clicou ${countA} vezes`;
  });

  // Só executa quando a página é recarregada:
  useEffect(() => {
    console.log(
      "Array de dependências vazio: Quando precisa executar apenas uma vez!"
    );
  }, []);

  useEffect(() => {
    if (!running) return;
    setTimeout(() => {
      setCountB((countB) => countB + 1);
    }, 1000);
  });

  //Array de dependências

  useEffect(() => {
    setCalculation(() => countD * 2);
  }, [countD]);

  //Clean up function
  useEffect(() => {
    let timer = setTimeout(() => {
      setCountC((countC) => countC + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(-135deg, #584dff 11%, #3df4b7 79%)",
        minHeight: "100vh",
      }}
    >
      <Grid item xs={12} sx={{ textAlign: "center", my: "20px" }}>
        <Typography variant="h4">UseEffect - Hooks do React</Typography>
      </Grid>
      <Grid item xs={7}>
        <Paper elevation={5} sx={{ padding: "20px", marginBottom: "20px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: " 600", marginBottom: "10px" }}
          >
            Exemplo 1 - useEffect sem dependência
          </Typography>
          <Typography variant="body1">Você clicou {countA} vezes</Typography>
          <Button
            variant="contained"
            onClick={() => setCountA(countA + 1)}
            sx={{ marginTop: "10px" }}
          >
            Adicionar
          </Button>
        </Paper>
        <Paper elevation={5} sx={{ padding: "20px", marginBottom: "20px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: " 600", marginBottom: "10px" }}
          >
            Exemplo 2 - useEffect sem dependência.
          </Typography>
          <Typography variant="body1">Eu renderizei {countB} vezes!</Typography>
          <Button
            variant="contained"
            sx={{ my: "10px", marginRight: "10px" }}
            onClick={() => setRunning(true)}
          >
            Contar
          </Button>
          <Button variant="contained" onClick={() => setRunning(false)}>
            Parar
          </Button>
        </Paper>
        <Paper elevation={5} sx={{ padding: "20px", marginBottom: "20px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: " 600", marginBottom: "10px" }}
          >
            Exemplo 3 - Array de dependências: Executando efeito com variável
            sendo atualizada.
          </Typography>
          <Typography variant="body1">Eu renderizei {countD} vezes!</Typography>
          <Typography variant="body1">Calculadora: {calculation}</Typography>
          <Button
            variant="contained"
            sx={{ my: "10px", marginRight: "10px" }}
            onClick={() => setCountD((c) => c + 1)}
          >
            Adicionar
          </Button>
        </Paper>
        <Paper elevation={5} sx={{ padding: "20px", marginBottom: "20px" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: " 600", marginBottom: "10px" }}
          >
            Exemplo 4 - Clean up function: Limpeza do efeito
          </Typography>
          <Typography variant="body1">Eu renderizei {countC} vezes!</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
