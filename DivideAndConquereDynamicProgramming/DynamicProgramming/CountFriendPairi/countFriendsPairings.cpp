#include <iostream>
using namespace std;

int countFriendsPairings(int n) {
    int friendsPairingsArr[n + 1];

    for (int i = 0; i <= n; i++) {
        if (i <= 2) {
            friendsPairingsArr[i] = i;
        } else {
            friendsPairingsArr[i] = friendsPairingsArr[i - 1] + (i - 1) * friendsPairingsArr[i - 2];
        }
    }
    return friendsPairingsArr[n];
}

int main() {
    int pairsNumber = 3;
    cout << "Count of Friends Pairings for < " << pairsNumber << " > numbers is " << countFriendsPairings(3) << endl;
    return 0;
}
