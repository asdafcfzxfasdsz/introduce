function QuadraticEquationSolver(a,b,c) {

        let discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            double root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            double root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            return "方程有两个不同的实根: x1 = " + root1 + ", x2 = " + root2;
        } else if (discriminant == 0) {
            double root = -b / (2 * a);
            return "方程有一个实根（两个相同的实根）: x = " + root;
        } else {
            double realPart = -b / (2 * a);
            double imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
            return "方程有两个共轭复数根: " + realPart + " + " + imaginaryPart + "i, " + realPart + " - " + imaginaryPart + "i";
        }
    }

    public static void main(String[] args) {
        // 示例测试
        System.out.println(solveQuadraticEquation(1, -3, 2)); // 两个实根
        System.out.println(solveQuadraticEquation(1, -2, 1)); // 一个实根
        System.out.println(solveQuadraticEquation(1, 0, 1)); // 复数根
        System.out.println(solveQuadraticEquation(0, 2, 1)); // 一次方程
        System.out.println(solveQuadraticEquation(0, 0, 1)); // 无效方程
    }
}