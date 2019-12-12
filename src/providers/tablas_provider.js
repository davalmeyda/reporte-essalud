import React from 'react';
class TablasProvider {
    
    tablaTitulo = (data) => {
        const titulo = [];
        for (var key in data[0]) {
            console.log(key);
            titulo.push(<th key={key}>{key}</th>);
        }
        return titulo;
    }
    
    tablaCuerpo = (data) => {
    
        return data.map((d, i) => {
            const valores = [];            
            for (var item in d) {
                valores.push(d[item]);
            }
            return (
                <tr key={i}>
                    {valores.map((f, i) => {
                        return (
                            <td key={i}>{f}</td>
                        );
                    })}
                </tr>
            );
        })
    
    }
}
export default TablasProvider;
