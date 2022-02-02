const { Schema, model } = require('mongoose');

const cuestionarioSchema = new Schema(
  {
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' },
    nombre: String,
    fechaInicio: Date,
    fechaFin: Date,
    code: String,
    preguntas: [
      { enunciado: String, respuestas: [{ nombre: String, correct: Boolean }] },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model('Cuestionario', cuestionarioSchema);
