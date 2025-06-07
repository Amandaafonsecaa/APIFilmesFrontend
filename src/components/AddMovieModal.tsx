import { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Snackbar,
} from "@mui/material";

interface AddMovieModalProps {
  open: boolean;
  onClose: () => void;
}

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

export default function AddMovieModal({ open, onClose }: AddMovieModalProps) {
  const [formData, setFormData] = useState({
    titulo: "",
    genero: "",
    duracao: "",
    diretor: "",
    classificacao: "",
    posterUrl: "",
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://apifilmesback-production.up.railway.app/filmes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            duracao: parseFloat(formData.duracao),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao criar filme");
      }

      setSnackbar({
        open: true,
        message: "Filme adicionado com sucesso!",
        severity: "success",
      });

      setFormData({
        titulo: "",
        genero: "",
        duracao: "",
        diretor: "",
        classificacao: "",
        posterUrl: "",
      });

      onClose();
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Erro ao adicionar filme. Tente novamente.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2" mb={3}>
            Adicionar Novo Filme
          </Typography>
          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <TextField
                fullWidth
                label="Título"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Gênero"
                name="genero"
                value={formData.genero}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Duração (horas)"
                name="duracao"
                type="number"
                inputProps={{ step: "0.1" }}
                value={formData.duracao}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Diretor"
                name="diretor"
                value={formData.diretor}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Classificação"
                name="classificacao"
                value={formData.classificacao}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="URL do Poster"
                name="posterUrl"
                value={formData.posterUrl}
                onChange={handleChange}
                required
                placeholder="https://exemplo.com/imagem.jpg"
              />
              <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
                <Button variant="outlined" onClick={onClose}>
                  Cancelar
                </Button>
                <Button variant="contained" type="submit">
                  Adicionar
                </Button>
              </Box>
            </Stack>
          </form>
        </Box>
      </Modal>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
