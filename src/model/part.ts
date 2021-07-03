class Part {
  name: string;
  price: number;
  type: string;
  constructor(partName: string, partPrice: number, partType: string) {
    this.name = partName;
    this.price = partPrice;
    this.type = partType;
  }
}
export default Part;
