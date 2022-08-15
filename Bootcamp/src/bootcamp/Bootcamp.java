
package bootcamp;

public class Bootcamp {

    public static void main(String[] args) {
        suma(2,2,2);
        Coche miCoche = new Coche();
        
        miCoche.SumPuertas();
        System.out.print(miCoche.puertas);
    }
    
    public static int suma(int a, int b, int c){
        return a+b+c; 
    }
    
    public static class Coche {
        public int puertas = 0;
        
        public void SumPuertas(){
            this.puertas++;
        }
    }
    
    
   
}
 
