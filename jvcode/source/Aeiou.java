import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Aeiou {

    private final String FINAL_CONST = "i am FINAL_CONST";

    public String runFn() {
        final String a = "abcv";
        // final
        System.out.println(this.FINAL_CONST);
        return a;
    }

    public static void main(String[] args) {
        Aeiou AeiouInstance = new Aeiou();
        String strFromRunFn = AeiouInstance.runFn();
        System.out.println(strFromRunFn + "-----final");
        // Map使用
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "1111");
        map.put(2, "2222");
        System.out.println(map.entrySet().stream()
            .filter(entry -> entry.getKey() != 3)
            .map(entry -> entry.getValue())
            .distinct()
            .collect(Collectors.toList()) + "-----Map使用");
        // String.equals
        String astr = "1";
        String bstr = "1";
        System.out.println(astr.equals(bstr) + "-----String.equals");
    }
}