const h1 = document.querySelector('.container h1');
const data = new Date();
{


switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
    return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
            case 3:
                diaSemanaTexto = 'Quarta';
                return diaSemanaTexto;
                case 4:
                    diaSemanaTexto = 'Quinta';
                    return diaSemanaTexto;
                    case 5:
                        diaSemanaTexto = 'Sexta';
                        return diaSemanaTexto;
                        case 6:
                            diaSemanaTexto = 'Sabado';
                            return diaSemanaTexto;
                            default:
                                diaSemanaTexto = '';
                                return diaSemanaTexto;
                                
}
}

h1.innerHTML = getdiaSemanaTexto(data.getDay());
