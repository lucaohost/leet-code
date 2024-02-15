class Solution {
    public int[] numMovesStones(int a, int b, int c) {
        int x=0,y=0,z=0;
        z=Math.max(Math.max(a,b),c);
        x=Math.min(Math.min(a,b),c);
        y=a+b+c-(z+x);
        int max=0,min=0;
        max=(y-x)+(z-y)-2;
        min=(x+1)==y &&(y+1)==z ? 0:
               ((z-y) > 2 && (y-x) > 2 ) ? 2:1;
int [] arr={min,max};
return arr;
    }
}