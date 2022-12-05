const CurrencyFormatter = new Intl.NumberFormat(undefined,
    {currency:"USD" , style: "currency"})

export function formatCurrency(number:number){
     
    return CurrencyFormatter.format(number);
}