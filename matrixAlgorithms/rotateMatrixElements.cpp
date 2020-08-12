#include <iostream> 
#define ROW 4 
#define COL 4 
using namespace std; 
  
void printMatrix(int mat[ROW][COL]) {
    for (int i=0; i<ROW; i++) {
        for (int j=0; j<COL; j++) {
            cout << mat[i][j] << " "; 
        }
        cout << endl;
    }
}

void rotatematrix(int endingRowIndex, int endingColumnIndex, int mat[ROW][COL]) { 
    // i - iterator 
    int startRow = 0, startCol = 0; 
    int prev, curr; 
    
    while (startRow < endingRowIndex && startCol < endingColumnIndex) {
  
        if (startRow + 1 == endingRowIndex || startCol + 1 == endingColumnIndex) {
            break;
        }

        prev = mat[startRow + 1][startCol];
  
        for (int i = startCol; i < endingColumnIndex; i++) { 
            curr = mat[startRow][i];
            mat[startRow][i] = prev;
            prev = curr;
        }
        startRow++;
  
        for (int i = startRow; i < endingRowIndex; i++) {
            curr = mat[i][endingColumnIndex-1];
            mat[i][endingColumnIndex-1] = prev;
            prev = curr;
        } 
        endingColumnIndex--;
  
        if (startRow < endingRowIndex) {
            for (int i = endingColumnIndex-1; i >= startCol; i--) {
                curr = mat[endingRowIndex-1][i];
                mat[endingRowIndex-1][i] = prev;
                prev = curr;
            }
        }
        endingRowIndex--;

        if (startCol < endingColumnIndex) {
            for (int i = endingRowIndex-1; i >= startRow; i--) {
                curr = mat[i][startCol];
                mat[i][startCol] = prev;
                prev = curr;
            }
        }
        startCol++;
    }
    printMatrix(mat);
}

int main() {
    int matrix[ROW][COL] = { 
                        {1,  2,  3,  4},
                        {5,  6,  7,  8},
                        {9,  10, 11, 12},
                        {13, 14, 15, 16}
                    };
    /*
    expected output is 
        5 1 2 3 
        9 10 6 4 
        13 11 7 8 
        14 15 16 12
    */
    rotatematrix(ROW, COL, matrix);
    return 0; 
} 
