import { Request, Response } from "express";
import Usuario from "../models/usuario";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  res.json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    return res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }

  res.json({ usuario });
};

export const postUsuario = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const usuario = new Usuario();
    await usuario.update(body);

    res.json(usuario);
  } catch (error) {
    res.status(500).json({
      msg: "Hable con el administrador",
    });
  }
};

export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({
        msg: `No existe un usuario con el id ${id}`,
      });
    }

    await usuario.update(body);

    res.json(usuario);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Error inesperado",
    });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);

  if (!usuario) {
    return res.status(404).json({
      msg: `No existe un usuario con el id ${id}`,
    });
  }

  await usuario.update({ estado: false });

  //await usuario.destroy();//eliminar

  res.json({
    msg: "deleteUsuario",
    id,
  });
};
