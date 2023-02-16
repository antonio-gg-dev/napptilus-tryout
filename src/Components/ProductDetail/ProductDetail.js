/**
 * @param product {ProductDetail}
 */
export function ProductDetail ({ product }) {
    return <div key={product.id}>
        <h1>{product.name}</h1>
        <img
            src={product.imageUrl}
            alt={product.imageAlt}
        />

        <table>
            <tbody>
                <tr>
                    <th>Marca</th>
                    <td>{product.brand}</td>
                </tr>
                <tr>
                    <th>Modelo</th>
                    <td>{product.model}</td>
                </tr>
                <tr>
                    <th>Procesador</th>
                    <td>{product.cpu}</td>
                </tr>
                <tr>
                    <th>Memoria</th>
                    <td>{product.ram}</td>
                </tr>
                <tr>
                    <th>Sistema Operativo</th>
                    <td>{product.os}</td>
                </tr>
                <tr>
                    <th>Resolución</th>
                    <td>{product.displayResolution}</td>
                </tr>
                <tr>
                    <th>Batería</th>
                    <td>{product.battery}</td>
                </tr>
                <tr>
                    <th>Cámara Principal</th>
                    <td>{product.primaryCamera}</td>
                </tr>
                <tr>
                    <th>Cámara Secundaria</th>
                    <td>{product.secondaryCamera}</td>
                </tr>
                <tr>
                    <th>Dimensiones</th>
                    <td>{product.dimensions}</td>
                </tr>
                <tr>
                    <th>Peso</th>
                    <td>{product.weight}</td>
                </tr>
            </tbody>
        </table>

        {product.humanPrice}
    </div>
}
