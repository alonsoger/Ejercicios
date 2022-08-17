package bootcamp;

public class Encapsulamiento {
    
    public static void main(String[] args) {
       Persona persona = new Persona(); 
       
       persona.setNombre("German");
       persona.setEdad(26);
       persona.setTelefono(99123);
       
       System.out.println(persona.getNombre());
       System.out.println(persona.getEdad());
       System.out.println(persona.getTelefono());
    }
}
    
    
    class Persona {
        private String nombre;
        private int edad;
        private int telefono;
        
        public void setNombre(String nombre){
            this.nombre = nombre;
        }
        public String getNombre(){
            return nombre;
        }
        
        public void setEdad(int edad){
            this.edad = edad;
        }
        public int getEdad(){
            return edad;
        }
        
        public void setTelefono(int telefono){
            this.telefono = telefono;
        }
        public int getTelefono(){
            return telefono;
        }
    }
    
