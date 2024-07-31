function Id({ params }: { params: { productID: string; reviewID: string } }) {
  return (
    <div>
      <h1>
        Product {params.productID} Review {params.reviewID}{" "}
      </h1>
    </div>
  );
}

export default Id;
