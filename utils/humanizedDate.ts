

export const humanizedDate = (date:string):string => {
  const today = new Date();
  const dt = new Date(date);
  const diffInMilliseconds = Number(today) - Number(dt);
  const diffInDays = diffInMilliseconds / 1000 / 60 / 60 / 24;
  const diffInSeconds = diffInMilliseconds / 1000;


  if (diffInDays < 1) {
    if(diffInSeconds < 240){
      return "Hace unos segundos"
    }else if(diffInSeconds < 480){
      return "Hace unos minutos"
    }else  {
      return "hoy"
    }
  } else if (diffInDays > 1 && diffInDays < 2) {
    return "ayer"
  } else {
    return dt.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });;
  }
};
