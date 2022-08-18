package bootcamp;

public class Herencia {
    
    public static void main(String[] args) {
        // --------------- Cliente --------------------
        System.out.println("El cliente: ");
        Cliente cliente = new Cliente();
        
        cliente.setNombre("German");
        cliente.setEdad(26);
        cliente.setTelefono(123456789);
        cliente.setCredito(500);
        
        System.out.println("Nombre: " + cliente.getNombre());
        System.out.println("Edad: " +cliente.getEdad());
        System.out.println("Telefono: " +cliente.getTelefono());
        System.out.println("Credito: " +cliente.getCredito());
        
        // --------------- Trabajador -------------------- 
        System.out.println("El trabajador: ");
        
        Trabajador trabajador = new Trabajador();
        
        trabajador.setNombre("Juan");
        trabajador.setEdad(40);
        trabajador.setTelefono(987654321);
        trabajador.setSalario(1500);
        
        System.out.println("Nombre: " +trabajador.getNombre());
        System.out.println("Edad: " +trabajador.getEdad());
        System.out.println("Telefono: " +trabajador.getTelefono());
        System.out.println("Salario: " +trabajador.getSalario());
    }
}
    
    class Persona{
        private String nombre;
        private int edad;
        private int telefono;
        
        public void setNombre(String nombre){
            this.nombre = nombre;
        }
        public void setEdad(int edad){
            this.edad = edad;
        }
        public void setTelefono(int telefono){
            this.telefono = telefono;
        }
        
        public String getNombre(){
            return nombre;
        }
        public int getEdad(){
            return edad;
        }
        public int getTelefono(){
            return telefono;
        }
    }
    
    class Cliente extends Persona {
        private int credito;
        
        public void setCredito(int credito){
            this.credito = credito;
        }
        public int getCredito(){
            return credito; 
        }
    }
    
    final class Trabajador extends Persona {
        private int salario;
        
        public void setSalario(int salario){
            this.salario = salario;
        }
        public int getSalario(){
            return salario;
        }
    }
    

