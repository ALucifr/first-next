function Id({ params }: { params: { productID: string } }) {
  return (
    <div>
      <h1>Product {params.productID} Details</h1>
    </div>
  );
}

export default Id;
