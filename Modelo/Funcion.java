public class Funcion {
    private String pelicula;
    private String fecha;
    private double precio;

    public Funcion(String pelicula, String fecha, double precio) {
        this.pelicula = pelicula;
        this.fecha = fecha;
        this.precio = precio;
    }

    // Getters y setters
    public String getPelicula() {
        return pelicula;
    }

    public void setPelicula(String pelicula) {
        this.pelicula = pelicula;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }
}