package com.microserviciocine.controller;

import com.microserviciocine.model.Funcion;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/funciones")
public class FuncionesController {

    private List<Funcion> funciones = new ArrayList<>();

    @PostMapping("/agregar")
    public Funcion agregarFuncion(@RequestBody Funcion funcion) {
        funciones.add(funcion);
        return funcion;
    }

    @GetMapping("/todas")
    public List<Funcion> obtenerFunciones() {
        return funciones;
    }
}
