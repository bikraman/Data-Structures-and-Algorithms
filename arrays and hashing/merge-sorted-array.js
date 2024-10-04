function merge(a, b) {

    if(a.length === 0) {
        return b
    }

    if(b.length === 0) {
        return a
    }

    let final = []

    let p1 = 0
    let p2 = 0

    let i = 0

    while(i < a.length + b.length) {

        // console.log(`i: ${i} p1: ${p1} p2: ${p2}`)

        if (a[p1] < b[p2]) {
            final.push(a[p1])
            p1 = p1 < a.length ? p1 + 1 : p1
            i++
            
        }
        else if (b[p2] < a[p1]) {
            final.push(b[p2])
            p2 = p2 < b.length ? p2 + 1 : p2
            i++
        }
        else if (a[p1] === b[p2]) {

            console.log(a[p1])
            console.log(b[p2])

            final.push(b[p2])
            final.push(a[p1])


            p1 = p1 < a.length ? p1 + 1 : p1
            p2 = p2 < b.length ? p2 + 1 : p2

            i = i + 2
        }
        else if(a[p1] === undefined){

            final.push(b[p2])
            p2++

            i++
        }
        else if(b[p2] === undefined) {
            final.push(a[p1])
            p1++

            i++
        }
    }

    return final

}

const a = [1]
const b = [2]
console.log(merge(a,b))