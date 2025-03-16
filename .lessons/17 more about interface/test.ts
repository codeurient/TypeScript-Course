// Funksiyaları keçdikdə, öz custom (union) tipimizi necə yarada bilərik bunu görmüşdük.
type MY_ID_TYPE1 = number | string;
function welcomePeople1(id: MY_ID_TYPE1) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());              // ✅ Bu, ən doğru və oxunaqlı üsuldur.
  } else {
      console.log(id);
  } 
}
welcomePeople1( 'hello' ); 







// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------






// 1) Həmin bu xüsusiyyəti İNTERFACE ilədə etmək mümkündür. 
// interface əsasən obyektləri təsvir etmək üçün istifadə olunur. Lakin, birbaşa number | string kimi bir BİRLƏŞMİŞ 
// (union) tipi, interface ilə yaratmaq mümkün deyil. Lakin, alternativ həll yolu kimi type və interface birlikdə istifadə edilə bilər.


// 2) interface birləşmiş (union) tipini birbaşa yarada bilmədiyi üçün, onu extends ilə istifadə edə bilərik. 
// Ancaq obyekt əsaslı işləmək məcburiyyətindəyik.

interface StringID {
  id: string;
}

interface NumberID {
  id: number;
}

type MY_ID_TYPE = StringID | NumberID;

function welcomePeople2(obj: MY_ID_TYPE) {
  if (typeof obj.id === "string") {
    console.log(obj.id.toUpperCase());            // ✅ Doğru
  } else {
    console.log(obj.id);
  }
}

welcomePeople2({ id: "hello" });
welcomePeople2({ id: 123 });










// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------




// Başqa bir nümunə daha. Burada isə sadəcə bir Number tipi vardır. 
// pt parametri obyekt qəbul edir. Obyekt ilə göndərilən dəyərlər isə number tipində olmalıdır. 
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({x: 3, y: 7});







// ------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------


// Funksiya olmadan interface istifadəsi və type ilə aradakı fərq. Sadəcə obyektlər ilə işlədikdə isə, type yaxud interface istifadə
// edilə bilər. Həm type, həm də interface obyekt strukturlarını təyin etmək üçün istifadə edilə bilər və bu halda onlar eyni cür işləyir.
type PersonType = {
  id: number;
  name: string;
}

interface PersonInterface {
  id: number;
  name: string;
}

const p1: PersonType      = { id: 1,  name: 'John'  }
const p2: PersonInterface = { id: 1,  name: 'John'  }




//! -----------------------------------------------------------------------------------------------------------------------------------
// Lakin, interface və type arasında bəzi fərqlər var:                                                                            //! |
//! -----------------------------------------------------------------------------------------------------------------------------------
// Xüsusiyyət	                         interface	                               type                                             //! |
//! -----------------------------------------------------------------------------------------------------------------------------------
// Genişləndirmə (Extends)	           interface başqa bir                       type ilə & (intersection)                        //! |
//                                     interface-dən extends edə                 vasitəsilə birləşdirilə bilər.                   //! |
//                                     bilər.	type digər                                                                          //! |
                                                                                                                                  //! |
//! -----------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                  //! |
// Bir obyekt üçün təyin edilir?	     Bəli ✅	                                  Bəli ✅                                           //! |
                                                                                                                                  //! |
//! -----------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                  //! |
// Daha çox istifadə                   Yalnız obyektlər üçün istifadə 	         Obyektlər, primitivlər (string, number və s.),   //! |
// sahəsi                              olunur.                                   birləşmələr (union) və s. üçün istifadə oluna    //! |
//                                                                               bilər.                                           //! |
                                                                                                                                  //! |
//! -----------------------------------------------------------------------------------------------------------------------------------
                                                                                                                                  //! |
// İmplementasiya (implements)	       class üçün istifadə oluna bilər           class üçün birbaşa istifadə oluna bilməz.        //! |
//                                     (implements).                                                                              //! |
//! -----------------------------------------------------------------------------------------------------------------------------------	
	